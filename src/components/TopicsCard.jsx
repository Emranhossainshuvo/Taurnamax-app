import { useState } from "react";
import { FaEdit, FaRegTrashAlt, FaSave } from "react-icons/fa";
import Swal from "sweetalert2";

const TopicsCard = ({ id, title, description, onDelete, onUpdate }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editableTitle, setEditableTitle] = useState(title);
    const [editableDescription, setEditableDescription] = useState(description);

    const handleSave = async () => {
        if (editableTitle.trim() && editableDescription.trim()) {
            const updatedTopic = {
                title: editableTitle,
                description: editableDescription,
            };
            await onUpdate(id, updatedTopic);
            setIsEditing(false);
        }
    };

    const handleDeleteTopic = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`https://backend-theta-coral-93.vercel.app/topics/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    onDelete(id);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                } else {
                    console.error("Failed to delete the topic.");
                }
            } catch (error) {
                console.error("Error deleting the topic:", error);
            }
        }
    };



    return (
        <div className="bg-[#FFFFFF] mb-4 max-w-screen-md mx-auto flex justify-between items-center rounded-md border-gray-800 border-[0.1px] shadow-md shadow-neutral-300 p-4">
            <div>
                {isEditing ? (
                    <div className="flex flex-col">
                        <input
                            type="text"
                            value={editableTitle}
                            onChange={(e) => setEditableTitle(e.target.value)}
                            className="text-3xl bg-gray-200 p-2 font-semibold mb-2 focus:outline-none"
                        />
                        <textarea cols={5} rows={5}
                            value={editableDescription}
                            onChange={(e) => setEditableDescription(e.target.value)}
                            className="text-base bg-gray-200 text-gray-600 w-full p-1  focus:outline-none"
                        />
                    </div>
                ) : (
                    <>
                        <h2 className="text-3xl font-semibold mb-2">{title}</h2>
                        <p className="text-base text-gray-600 max-w-[95%]">{description}</p>
                    </>
                )}
            </div>
            <div className="flex items-center gap-3">
                {isEditing ? (
                    <FaSave onClick={handleSave} className="text-xl text-green-600 cursor-pointer" />
                ) : (
                    <FaEdit onClick={() => setIsEditing(true)} className="text-xl text-[#334155] cursor-pointer" />
                )}
                <FaRegTrashAlt onClick={handleDeleteTopic} className="text-red-500 text-xl cursor-pointer" />
            </div>
        </div>
    );
};

export default TopicsCard;

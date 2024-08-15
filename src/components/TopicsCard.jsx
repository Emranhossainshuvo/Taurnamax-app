import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TopicsCard = ({ id, title, description, onDelete }) => {

    const handleDeleteTopic = async () => {
        const confirmed = window.confirm("Are you sure you want to delete this topic?");
        if (confirmed) {
            try {
                const response = await fetch(`http://localhost:5000/topics/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    onDelete(id); // Call onDelete to remove the item from the UI
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
                <h2 className="text-3xl font-semibold mb-2">{title}</h2>
                <p className="text-base text-gray-600 max-w-[95%]">{description}</p>
            </div>
            <div className="flex items-center gap-3">
                <FaRegTrashAlt 
                    className="text-red-500 text-xl cursor-pointer" 
                    onClick={handleDeleteTopic} 
                />
                <FaEdit className="text-xl text-[#334155]" />
            </div>
        </div>
    );
};

export default TopicsCard;

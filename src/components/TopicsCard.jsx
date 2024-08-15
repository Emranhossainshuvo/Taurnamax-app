import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TopicsCard = () => {
    return (
        <>
            <div className="bg-[#FFFFFF] flex justify-between items-center rounded-md border-gray-800 border-[0.1px] shadow-md shadow-neutral-300 p-4">
                <div>
                    <h2 className="text-3xl font-semibold">Title</h2>
                    <p className="text-base text-gray-600">description: Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex items-center gap-3">
                    <FaRegTrashAlt className="text-red-500 text-2xl" />
                    <FaEdit className="text-2xl text-[#334155]" />
                </div>
            </div>
        </>
    );
};

export default TopicsCard;
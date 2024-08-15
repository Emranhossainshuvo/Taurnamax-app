import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TopicsCard = ({title, description}) => {
    return (
        <>
            <div className="bg-[#FFFFFF] mb-4 flex justify-between items-center rounded-md border-gray-800 border-[0.1px] shadow-md shadow-neutral-300 p-4">
                <div>
                    <h2 className="text-3xl font-semibold mb-2">{title}</h2>
                    <p className="text-base text-gray-600 max-w-[95%]">{description}</p>
                </div>
                <div className="flex items-center gap-3">
                    <FaRegTrashAlt className="text-red-500 text-xl" />
                    <FaEdit className="text-xl text-[#334155]" />
                </div>
            </div>
        </>
    );
};

export default TopicsCard;
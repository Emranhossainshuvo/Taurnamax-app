import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <div className="bg-[#1E293B] max-w-screen-md mx-auto p-4 mt-4 mb-6 flex justify-between items-center  ">
                <h3 className="text-white text-2xl font-semibold">Taurnamax Assignment</h3>
                <Link href="/addTopic">
                    <button className="bg-white text-black p-2 rounded-md">Add topic</button>
                </Link>
            </div>
        </>
    );
};

export default Navbar;
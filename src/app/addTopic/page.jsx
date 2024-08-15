import React from 'react';
import Navbar from '../../components/Navbar';

const addTopic = () => {
    return (
        <div className="max-w-screen-md mx-auto">
            <Navbar />
            <input type="text" placeholder='Topic title' className='border-gray-500 border-[1px] w-full mb-3 p-2' />
            <input type="text" placeholder='Topic Descriptin' className='border-gray-500 border-[1px] w-full p-2' />
            <button className='text-white text-xl font-semibold bg-[#16A34A] hover:bg-[#16a34ab9] rounded-sm p-2 mt-3'>Add topic</button>
        </div>
    );
};

export default addTopic;
"use client"
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';

const AddTopic = () => {

    

        const handleAddTopic = async (e) => {
            e.preventDefault();
            const form = e.target;
            const title = form.title.value;
            const description = form.description.value;
    
            const topic = {
                title,
                description
            };
    
            // Send data to the backend
            const response = await fetch('http://localhost:5000/topics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(topic),
            });
    
            const data = await response.json();
            console.log('Response from backend:', data);
        };
    

    return (
        <div className="max-w-screen-md mx-auto">
            <Navbar />
            <form onSubmit={handleAddTopic}>
                <input name='title' type="text" placeholder='Topic title' className='border-gray-500 border-[1px] w-full mb-3 p-2' />
                <input type="text" name='description'  placeholder='Topic Descriptin' className='border-gray-500 border-[1px] w-full p-2' />
                <button type='submit' className='text-white text-xl font-semibold bg-[#16A34A] hover:bg-[#16a34ab9] rounded-sm p-2 mt-3'>Add topic</button>
            </form>
        </div>
    );
};

export default AddTopic;
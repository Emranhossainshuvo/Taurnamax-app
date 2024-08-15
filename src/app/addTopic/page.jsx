"use client"
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Link from "next/link";

const AddTopic = () => {

    const [loading, setLoading] = useState(false);

    const handleAddTopic = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;

        const topic = {
            title,
            description
        };

        try {
            const response = await fetch('http://localhost:5000/topics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(topic),
            });

            const data = await response.json();
            console.log('Response from backend:', data);

            if (response.ok) {
                form.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Topic added successfull",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        } catch (error) {
            console.error('Error sending data:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="max-w-screen-md mx-auto">
            <div className="bg-[#1E293B] max-w-screen-md mx-auto p-4 mt-4 mb-6 flex justify-between items-center  ">
                <h3 className="text-white text-2xl font-semibold">Taurnamax Assignment</h3>
                <Link href="/">
                    <button className="bg-white text-black p-2 rounded-md">Back to home</button>
                </Link>
            </div>
            <form onSubmit={handleAddTopic}>
                <input name='title' type="text" placeholder='Topic title' className='border-gray-500 border-[1px] w-full mb-3 p-2' />
                <input type="text" name='description' placeholder='Topic Descriptin' className='border-gray-500 border-[1px] w-full p-2' />
                <button type='submit' className='text-white text-xl font-semibold bg-[#16A34A] hover:bg-[#16a34ab9] rounded-sm p-2 mt-3'>Add topic</button>
            </form>
        </div>
    );
};

export default AddTopic;
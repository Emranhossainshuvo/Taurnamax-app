'use client'
import { useEffect, useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import TopicsCard from "./TopicsCard";

const Displaytopics = () => {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const res = await fetch('http://localhost:5000/topics');
                const data = await res.json();
                setTopics(data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchTopics();
    }, [])


    return (
        <div className="max-w-screen-md mx-auto ">
            {
                topics.map((topic, index) => <TopicsCard title={topic.title} description={topic.description} key={index} />)
            }
        </div>
    );
};

export default Displaytopics;
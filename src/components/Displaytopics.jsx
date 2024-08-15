'use client'
import { useEffect, useState } from "react";
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
                console.log(error);
            }
        };

        fetchTopics(); 
    }, []);

    const handleDeleteFromState = (id) => {
        setTopics(prevTopics => prevTopics.filter(topic => topic._id !== id));
    };

    return (
        <>
            {topics.length === 0 ? (
                <p>No topics found.</p>
            ) : (
                topics.map((topic) => (
                    <TopicsCard 
                        key={topic._id} 
                        id={topic._id} 
                        title={topic.title} 
                        description={topic.description} 
                        onDelete={handleDeleteFromState} 
                    />
                ))
            )}
        </>
    );
};

export default Displaytopics;

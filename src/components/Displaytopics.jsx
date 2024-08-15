'use client'
import { useEffect, useState } from "react";
import TopicsCard from "./TopicsCard";

const Displaytopics = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const res = await fetch('https://backend-theta-coral-93.vercel.app/topics');
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

    const handleUpdateTopic = async (id, updatedTopic) => {
        try {
            const res = await fetch(`https://backend-theta-coral-93.vercel.app/topics/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTopic),
            });

            if (res.ok) {
                setTopics((prevTopics) =>
                    prevTopics.map((topic) =>
                        topic._id === id ? { ...topic, ...updatedTopic } : topic
                    )
                );
            }
        } catch (error) {
            console.log(error);
        }
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
                        onUpdate={handleUpdateTopic}
                    />
                ))
            )}
        </>
    );
};

export default Displaytopics;

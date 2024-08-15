import Head from "next/head";
import Displaytopics from "../components/Displaytopics";
import Navbar from "../components/Navbar";
import '../styles/globals.css';


const page = () => {
  return (
    <div>
      <Navbar />
      <Displaytopics />
    </div>
  );
};

export default page;
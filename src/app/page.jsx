import Displaytopics from "../components/Displaytopics";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar />
      <Displaytopics />
    </div>
  );
};

export default page;
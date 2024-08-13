import { useState, useEffect } from "react";
import Crew from "../components/Crew";

const Crewpage = ({ navbar }) => {
  const [crew, setCrew] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDestination = async () => {
      try {
        const data = await fetch("/api/crew");
        const res = await data.json();
        setCrew(res);
      } catch (err) {
        alert(err);
        console.log(err);
        return;
      } finally {
        setLoading(false);
      }
    };
    getDestination();
  }, []);
  return (
    <div className="crew md:crew-md lg:crew-lg">
      {navbar}
      <Crew
        crew={crew}
        currentIndex={currentIndex}
        loading={loading}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default Crewpage;

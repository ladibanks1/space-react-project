import React,{useState , useEffect} from "react";
import Technology from "../components/Technology";


const TechnologyPage = ({navbar}) => {
  const [technology, setTechnology] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDestination = async () => {
      try {
        const data = await fetch("/api/technology");
        const res = await data.json();
        setTechnology(res);
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
    <div className="technology md:technology-md lg:technology-lg">
        {navbar}
        <Technology
          technology={technology}
          currentIndex={currentIndex}
          loading={loading}
          setCurrentIndex={setCurrentIndex}
        />
    </div>
  );
};

export default TechnologyPage;

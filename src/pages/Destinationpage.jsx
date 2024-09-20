import { useEffect, useState } from "react";
import Destination from "../components/Destination";
const Destinationpage = ({navbar}) => {
  const [destination, setDestination] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDestination = async () => {
      try {
        const data = await fetch("https://react-project-api.onrender.com/space-tourism/destination" , {
          headers : {
            "x-api-key" : import.meta.env.VITE_API_KEY
          }
      });
        const res = await data.json();
        setDestination(res);
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
    <div className="lg:destination-lg md:destination-md destination w-full">
      {navbar}
      <Destination
      destination={destination}
      currentIndex={currentIndex}
      loading={loading}
      setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default Destinationpage;

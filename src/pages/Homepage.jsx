import React from "react";
import Hero from "../components/Hero";

const Homepage = ({navbar}) => {
  return (
    <div className="h-full background md:background-md lg:background-lg">
      {navbar}
      <Hero />
    </div>
  );
};

export default Homepage;

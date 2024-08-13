import React from "react";

const Technology = ({ technology, loading, currentIndex, setCurrentIndex }) => {
  return (
    <section className="text-white">
      <div>
        <h1 className="text-2xl lg:ms-36 ms-10"><span className="text-slate-500 mx-2">03</span> SPACE LAUNCH 101</h1>
      </div>
      
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="flex flex-col-reverse mt-20 lg:flex-row lg:ps-32 lg:py-5 lg:pe-0 lg:me-0 lg:gap-10">
          <section className="text-center lg:text-left lg:flex lg:items-center lg:w-[100vw]">
            <div className="mb-5 lg:m-0">
              {technology.map((_item, index) => (
                <div className="inline mx-3 number-box lg:flex lg:my-4" key={index}>
                  <input
                    className="lg:mb-1"
                    type="radio"
                    name="same"
                    value="1"
                    onClick={() => setCurrentIndex(index)}
                  />
                  <span>{index}</span>
                </div>
              ))}
            </div>
            <div className="p-10">
              <p className="text-xl text-slate-500">THE TERMINOLOGY</p>
              <h3 className='text-3xl uppercase my-3'>{technology[currentIndex].name}</h3>
              <p>{technology[currentIndex].description}</p>
            </div>
          </section>
          <section className="mb-10 lg:w-full">
            <img 
            src={innerWidth < 1000 ? `${technology[currentIndex].images.landscape}` : `${technology[currentIndex].images.portrait}`} 
            alt={technology[currentIndex].name} className=" md:h-[50vw] lg:h-[400px] w-full" />
          </section>
        </div>
      )}
    </section>
  );
};

export default Technology;

import React from "react";

const Crew = ({ crew, currentIndex, loading, setCurrentIndex }) => {
  return (
    <>
      <section className="text-white">
        <div>
          <h1 className="text-3xl ms-2 lg:ms-10">
            <span className="text-slate-500">02</span> Meet Your crew
          </h1>
        </div>
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <div>
            <section className="flex flex-col lg:flex-row text-center px-10 pt-16 lg:items-center  lg:p-0 lg:mt-2 lg:px-20 lg:gap-20">
              <div className="lg:w-1/2 lg:mt-20">
                <h1 className="text-3xl text-slate-600">Commander</h1>
                <p className="text-4xl text-slate-100">
                  {crew[currentIndex].name}
                </p>
                <p className="mt-10 text-slate-300 mb-5">{crew[currentIndex].bio}</p>
                {innerWidth < 1000
                  ? crew.map((_item, index) => (
                    <div className="inline mx-3 box" key={index}>
                    <input type="radio" name="same" onClick={() => setCurrentIndex(index)}/>
                  </div>
                    ))
                  : ""}
              </div>
              <div>
                <img
                  className="mt-20 mx-auto lg:mt-10"
                  src={crew[currentIndex].images.png}
                  alt=""
                />
              </div>
            </section>
            <div className="lg:ms-40 lg:-mt-5 lg:relative lg:bottom-10">
              {innerWidth > 1000
                ? crew.map((_item, index) => (
                  <div className="inline mx-3 box" key={index}>
                    <input type="radio" name="same" onClick={() => setCurrentIndex(index)} />
                  </div>
                )): ""}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Crew;

import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="hero-section">
        <div>
          <article>
            <p className="text-slate-400">SO, YOU WANT TO TRAVEL TO</p>
            <br />
            <p className="text-7xl tracking-widest">SPACE</p>
            <p className="text-slate-400 text-sm mt-5 leading-6 lg:w-[540px] lg:tracking-wider">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </article>
        </div>
        <div  className="w-36 h-36 sm:w-[200px] sm:h-[202px] rounded-[100%] bg-white text-black flex items-center justify-center mx-auto mt-28 lg:w-[170px] lg:h-[170px] lg:-mt-1">
            <button className="text-center text-3xl cursor-pointer" onClick={() => navigate(-1)}>
              EXPLORE
            </button>
        </div>
      </section>
    </>
  );
};

export default Hero;

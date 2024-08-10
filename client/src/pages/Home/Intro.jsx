import React, {  useContext } from "react";
import { useSelector } from "react-redux";
import { GlowContext } from './UseGlow';
import { Link, useNavigate } from "react-router-dom";




function Intro() {
  const {  portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, disription, caption } = intro;
  const { handleMouseEnter, handleMouseLeave } = useContext(GlowContext);

  

 
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 ">
      <h1 className="text-white">{welcomeText || ""} </h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold fname ">
        {firstName || ""} {lastName || ""}
      </h1>
      <h1 className="text-7xl sm:text-3xl text-white font-semibold caption ">
        {caption || ""}
      </h1>
      <p className="text-white w-2/3 text-justify">{disription || ""}</p>
  
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded "
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
      >
        Get Started
      </button>
    </div>
  );
}

export default Intro;
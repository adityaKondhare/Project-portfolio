import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import Lottie from 'lottie-react'
import AboutImg from '../../Assets/AboutImg.json'

function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, lottieURL, discription1, discription2 } = about;

  
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center aboutCont ">
        <div className="h-[70vh] w-1/2 imgAbout ">
          <Lottie animationData={AboutImg} />
        </div>
        <div className="flex flex-col gap-5 w-1/2 text-justify paraAbout ">
          <p className="text-white">{discription1 || ""}</p>
          <p className="text-white">{discription2 || ""}</p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl mt-8">
          Here are a few technologies I’ve been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5 ml-5 ">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10 ">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
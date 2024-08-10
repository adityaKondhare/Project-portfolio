import React from "react";
import SectionTitle from "../../components/SectionTitle";


const Education = () => {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const educations = [
        {
        id: "1",
        degree : "B.E",
        period : "2020 - 2024",
        marks : "8.23 CGPA",
        clg : "Smt. Indira Gandhi College Of Engineering Navi Mumbai"
        },
        {
        id: "2",
        degree : "HSC",
        period : "2019 - 2020",
        marks : "60%",
        clg : "Dr. B.N Bandodkar College Of Science"
        },
        {
        id: "3",
        degree : "SSC",
        period : "2017 - 2018",
        marks : "90%",
        clg : "Dr. Bedekar Vidya Mandir"
        }
    ]
  return (
    <div>
      <SectionTitle title="Education" />
      <div className="flex py-10 gap-16 proCont">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/5  text-justify slide ">
          {educations.map((education, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer  "
            >
              <h1
                className={`text-xl px-5 
                 ${
                   selectedItemIndex === index
                     ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                     : "text-white"
                 } `}
              >
                {education.degree}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex  justify-center gap-10  ">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-secondary text-2xl">
              {educations[selectedItemIndex].clg}
            </h1>
            <p className="text-white">
              {` Marks - ${educations[selectedItemIndex].marks}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

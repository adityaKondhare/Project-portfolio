import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Experiences() {
  const [selectedItemIndex , setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  return (
    <div>
      <SectionTitle title="Internships" />

      <div className="flex py-10 gap-20 proCont">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/4 h-full slide">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 
                 ${
                   selectedItemIndex === index
                     ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                     : "text-white"
                 } `}
              >
                {experience.role}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-secondary text-2xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].start_date}
          </h1>
          <p className="text-white text-justify ">
            {experiences[selectedItemIndex].discription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
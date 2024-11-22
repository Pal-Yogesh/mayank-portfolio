import Image from "next/image";
import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Mathematics Educator & Expert",
      description:
        "Designed and delivered engaging lessons, ensuring students grasped fundamental and advanced mathematical concepts.",
      image: "/Frame 41.svg",
    },
    {
      role: "Curriculum Developer",
      description:
        "Created tailored lesson plans and materials to meet diverse learning needs and enhance conceptual understanding.",
      image: "/Frame 36.svg",
    },
    {
      role: "Competitive Exam Trainer",
      description:
        "Prepared students for entrance exams through focused mentoring and strategy development in Mathematics.",
      image: "/Frame 40.svg",
    },
  ];

  return (
    <>
      <div className="bg-[#003346] text-[#F8F9FA] p-7  lg:p-20">
        <div>
          <div className="flex justify-center items-center gap-4">
            <hr className="lg:w-[90px] w-[17px] h-[2px]" />
            <h2 className="font-bricolage text-[12px] lg:text-[1.5rem]">
              Career so far
            </h2>
            <hr className="w-[17px] lg:w-[90px] h-[2px]" />
          </div>
          <h2 className="text-center text-[24px] lg:text-7xl font-bricolage">
            Experience
          </h2>
        </div>

        <div className="mt-24 space-y-10">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="border border-white rounded-xl lg:flex justify-between items-center py-10 lg:p-5"
            >
              <div className="flex gap-10  px-4 lg:pt-0">
                <Image
                  src={experience.image}
                  width={1000}
                  height={1000}

                  
                  alt="img"
                  className="w-[86px] h-[86px]"
                />
                <h2 className="text-[24px] lg:text-5xl lg:w-[520px] font-bricolage">
                  {experience.role}
                </h2>
              </div>
              <div className="flex gap-8 items-center px-4 pt-10 lg:pt-0">
                <p className="h-[120px] w-[1px] bg-white"></p>
                <p className="text-[20px] lg:w-[250px] font-bricolage">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;

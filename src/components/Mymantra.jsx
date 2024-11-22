import React from "react";

const Mymantra = () => {
  return (
    <>
      <div className="bg-[#00425A] px-8  py-16  lg:p-24">
        <div className="text-[32px] lg:text-7xl flex gap-2 items-center">
          <h1 className="text-[#F8F9FA] font-playfair">
            My <span className="text-[#00EEEB]">Mantra</span>
          </h1>
          <hr className="h-1 w-[100px] lg:w-[872px]" />
        </div>



        <div>

          
          <div className="border-2 border-white bg-[#013345] rounded-lg mt-5 lg:mt-20 p-8">
            <p className="text-white text-[20px] lg:text-3xl font-bricolage">
          <span> &quot;Mathematics isn&apos;t about numbers — it&apos;s about unlocking the power of thinking.&quot;
            </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mymantra;

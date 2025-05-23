import React from "react";

const Add = () => {
  return (
    <div className="bg-[#121118] ">
      <div className="container pb-12 pt-12 flex items-center justify-between mx-auto max-sm:gap-10 max-sm:flex-col">
        <div className="text-xl ">
          <h1 className="text-white text-6xl font-[300] max-w-[400px] max-lg:text-4xl  mb-5">
            Add interactive elements
          </h1>
          <p className="text-[#6a6c6e] max-w-[550px] max-lg:text-xl">
            People learn best by doing. Include
            hands-on assignments, quizzes and give
            students feedback.{" "}
            <span className="text-white ">
              Give extra value, with little
              effort.
            </span>
          </p>
        </div>
        <div className=" lg:p-[80px] max-md:hidden sm:p-[30px] p-[20px] md:p-[50px]  bg-[#3D3B48]  rounded-[50px] mx-auto">
          <div className="lg:p-[10px]">
            <div className="bg-black items-center flex justify-between w-[400px] mb-5 rounded-4xl  mx-auto ">
              <div className="text-white py-[15px] ps-[30px] mx-auto">
                <h1>Request work submission</h1>
                <p className="text-[#737374]">
                  Give student feedback on thair
                  work
                </p>
              </div>
            </div>
            <div className="bg-black items-center flex justify-between w-[400px]   mx-auto rounded-4xl  ">
              <div className="text-white py-[15px] mx-auto px-[30px]">
                <h1>Request work submission</h1>
                <p className="text-[#737374]">
                  Give student feedback on thair
                  work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;

import React from "react";

const Overlay = () => {
  return (
    <div className="font-serif absolute top-2/14  pl-2 left-0  lg:left-0 lg:pl-6 lg:top-2/8 md:pl-6 md:top-2/14 md:left-0 sm:absolute   sm:left-0  text-white">
  <div className="flex gap-4 lg:absolute lg:bottom-0 lg:right-10 md:absolute md:bottom-0 md:right-10 ">
        <div className=" md: h-12 w-12 rounded-full bg-white cursor-pointer"></div>

          <img src="https://i.imgur.com/QcGcuKq.png" alt="NASA logo" />
        </div>
      <h2 className=" text-3xl w-100 lg:text-7xl lg:w-120 font-semibold md:text-5xl  sm:text-4xl sm:w-100">
        Understanding the Universe
      </h2>
      <p className="text-sm lg:text-base w-xs lg:pt-6 lg:pb-4 md:w-1/2 sm:w-1/2 lg:w-1/2">
        Live launch coverage of SPHEREx, the agency’s newest space telescope,
        will begin at 9:15 p.m. EST on Thursday, March 6. SPHEREx will lift off
        with another NASA mission, PUNCH, a constellation of four small
        satellites that will make global observations of the Sun’s outer
        atmosphere.
      </p>
      <button className="cursor-pointer lg:text-xl bg-[#d83933] text-white  rounded">
        Mission Updates
      </button>
      <div className="lg:flex lg:gap-8 lg:pt-12 md:flex md:gap-8 md:pt-16">
        <div>
          <hr className="text-slate-600 pb-2 lg:w-3xs" />
          <p className="font-dmMono text-xs tracking-wider pb-3 ">
            SPHEREX MISSION
          </p>
          <p className="text-base ">
            Seeking life's ingredient{" "}
            <img
              src="https://i.imgur.com/DrMi6IS.png"
              className="h-4 inline-block lg:h-6"
              alt="Arrow icon"
            />
          </p>
        </div>
        <div>
          <hr className="text-slate-600 pb-2 lg:w-3xs" />
          <p className="font-dmMono text-xs tracking-wider pb-3">
            PUNCH MISSION
          </p>
          <p>
            Seeking Solar Wind{" "}
            <img
              src="https://i.imgur.com/DrMi6IS.png"
              className="h-4 inline-block lg:h-6"
              alt="Arrow icon"
            />
          </p>
        </div>
        <div>
          <hr className="text-slate-600 pb-2 lg:w-3xs" />
          <p className="font-dmMono text-xs tracking-wider pb-3">
            LIVE LAUNCH COVERAGE
          </p>
          <p>
            Stream on NASA +{" "}
            <img
              src="https://i.imgur.com/DrMi6IS.png"
              className="h-4 inline-block lg:h-6"
              alt="Arrow icon"
            />
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default Overlay;

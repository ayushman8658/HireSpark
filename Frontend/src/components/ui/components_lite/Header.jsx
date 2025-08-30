import React from "react";
import { Button } from "../button";
import { PiBuildingOffice } from "react-icons/pi";

function Header() {
  return (
    <div>
      <div className="text-center ">
        <div className="flex flex-col gap-5 my-10">
          <span className="px-4 mx-auto flex justify-center items-center py-2 gap-2 rounded-full bg-gray-200 text-green-500 font-medium">
            <span className="text-[black] text-2xl">
              <PiBuildingOffice />
            </span>
            <span className="text-2xl">No.1 Job Portal in India</span>
          </span>

          <h2 className="text-6xl md:text-6xl font-bold">
            Search Apply & <br />
            Get Your <span className="text-[#19EA06]">Dream Job</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 px-4 md:px-20 mx-auto max-w-2xl font-bold">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job
            applications from start to finish.
          </p>
          <div className=" border border-gray-300 rounded-full flex items-center max-w-md mx-auto px-4 py-2 w-full">
            <input
              type="text"
              placeholder="Find your dream job"
              className="outline-none border-none w-full"
            ></input>
            <Button className="rounded-full">
              <span className="text-white font-bold">Search</span>
            </Button>
          </div>
          <div className="mt-6">
            <button className="bg-[#19EA06] text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

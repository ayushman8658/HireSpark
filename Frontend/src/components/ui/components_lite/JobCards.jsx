import React from "react";
import { Badge } from "../badge";
//import { useNavigate } from "react-router-dom";

const JobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200 cursor-pointer hover:shadow-2xl transition duration-300 shadow-green-200">
      <div>
        <h1 className="text-lg font-medium">Company Name</h1>
        <p className="text-sm text-gray-600">India</p>
      </div>
      <div>
        <h2 className="font-bold text-lg my-2">Job Titile</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet,
          animi, qui placeat quia doloribus nemo quae illum iste repellendus ex
          fugit facere in quasi laudantium quis perferendis tempore amet!
        </p>
      </div>
      <div className=" flex gap-2 items-center mt-4 ">
        <Badge className={" text-blue-600 font-bold"} variant={"ghost"}>
          10 Positions
        </Badge>
        <Badge className={" text-[#FA4F09] font-bold"} variant={"ghost"}>
          20LPA
        </Badge>
        <Badge className={" text-[#6B3AC2]  font-bold"} variant={"ghost"}>
          remote
        </Badge>
        <Badge className={" text-black font-bold"} variant={"ghost"}>
          Full Time
        </Badge>
      </div>
    </div>
  );
};

export default JobCards;

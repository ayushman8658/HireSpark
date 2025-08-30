import React from "react";
import JobCards from "./JobCards";
const randomJobs = [1,2,3,4,5,6,7,8,9,10,11,12];
//import { useSelector } from "react-redux";

const LatestJobs = () => {
  //const allJobs = useSelector((state) => state.jobs?.allJobs || []); // Safely access allJobs

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-4xl font-bold">
        <span className="text-[#19EA06]">Latest & Top </span>Job Openings
      </h2>

      {/* Job Cards */}
      <div className="grid grid-cols-3 gap-4 my-5">
        {randomJobs.slice(0, 6).map((job,index) => (
            <JobCards></JobCards>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;

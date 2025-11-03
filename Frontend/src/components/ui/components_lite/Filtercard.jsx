import React from "react";

const filterArray = [
  {
    filterType: "Location",
    array: [
      "kolkata",
      "Mumbai",
      "Bangalore",
      "Chennai",
      "Delhi",
      "Hyderabad",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Lucknow",
      "Bhubaneswar",
      "Indore",
      "Coimbatore",
      "Gurgaon",
      "Noida",
      "Kochi",
      "Goa",
      "Dehradun",
      "Nagpur",
      "Kanpur",
      "Visakhapatnam",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Information Technology",
      "Marketing",
      "Engineering",
      "Sales",
      "Finance",
      "Healthcare",
      "Education",
      "Manufacturing",
      "Agriculture",
      "Consulting",
    ],
  },
  {
    filterType: "Job Type",
    array: ["Full-time", "Internship"],
  },
  {
    filterType: "Experience Level",
    array: ["Entry Level", "Senior Level", "Manager", "Executive"],
  },
  // {
  //   filterType: "Salary Range",
  //   array: [
  //     "Below 5 LPA",
  //     "6-10 LPA",
  //     "10-15 LPA",
  //     "15-20 LPA",
  //     "Above 20 LPA",
  //   ],
  // },
];

const Filter = () => {
  return (
    // Filter Card Container
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200 cursor-pointer hover:shadow-2xl transition duration-300 shadow-green-200">
      {filterArray.map((filterItem, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-bold mb-3">{filterItem.filterType}</h3>
          <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
            {filterItem.array.map((option, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-500" />

                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";
import { Button } from "../button";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setSearchedQuery } from "@/redux/jobSlice";
 

 
const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mern Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "Artificial Intelligence Engineer",
  "Cybersecurity Engineer",
  "Product Manager",
  "UX/UI Designer",
  "Graphics Engineer",
  "Digital Marketing Specialist",
];


const Categories = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const searchjobHandler = (query) => {
//       dispatch(setSearchedQuery(query));
//       navigate("/browse");
//   }
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center mt-10 mb-2">
          Categories
        </h1>
        <p className="text-center text-gray-600">
          Explore our extensive job market.
        </p>
      </div>
      <Carousel className="w-full max-w-4xl mx-auto my-10 px-4 md:px-0 ">
        <CarouselContent>
          {Category.map((category, index) => {
            return (
              <CarouselItem className="md:basis-1/2 lg-basis-1/3 px-2">
                <Button onClick={() => searchjobHandler(category)}>
                  {category}
                </Button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Categories;

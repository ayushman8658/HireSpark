import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../label";
import { Input } from "../input";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";

const Register = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    file: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();
  const changeEventhandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    formData.append("phoneNumber", input.phoneNumber);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const response = await axios.post(
        `${USER_API_ENDPOINT}/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // Include credentials for CORS
        }
      );
      if (response.data.success) {
        navigate("/login");
        // Show success message
        toast.success(response.data.message);
        // Optionally redirect or show a success message
      }
    } catch (error) {
      console.error("Registration failed:", error);
      const errorMessage = error.response
        ? error.response.data.message
        : "Registration failed. Please try again.";
      toast.error(errorMessage);
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-500 rounded-md p-4 m-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center">Register</h1>
          <div className="my-2">
            <Label>Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventhandler}
              placeholder="Enter your name"
            ></Input>
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventhandler}
              placeholder="Enter your email"
            ></Input>
          </div>
          <div className="my-2">
            <Label>PhoneNumber</Label>
            <Input
              type="tel"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventhandler}
              placeholder="Enter your phonenumber "
            ></Input>
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventhandler}
              placeholder="Enter your password"
            ></Input>
          </div>
          <div className="my-2">
            <Label>Confirm Password</Label>
            <Input type="password" placeholder="Confirm your password"></Input>
          </div>
          <div className="flex items-center justify-between my-4">
            <RadioGroup className="flex items-center  gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventhandler}
                  className="cursor-pointer"
                ></Input>
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventhandler}
                  className="cursor-pointer"
                ></Input>
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center gap-2">
            <Label>Profile Photo</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={changeFileHandler}
              name="file"
              placeholder="Upload your profile photo"
              className="cursor-pointer"
            ></Input>
          </div>
          <div className="flex items-center justify-center my-5">
            <button
              type="submit"
              className="bg-[#23dc12] hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </button>
          </div>
          <div className="text-center">
            <p className="text-md text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-700">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

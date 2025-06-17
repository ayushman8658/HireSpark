import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../label";
import { Input } from "../input";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
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

    try {
      const response = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Include credentials for CORS
      });
      if (response.data.success) {
        navigate("/");
        // Show success message
        toast.success(response.data.message);
        // Optionally redirect or show a success message
      }
    } catch (error) {
      console.error("Registration failed:", error);
      const errorMessage = error.response
        ? error.response.data.message
        : "Login failed. Please try again.";
      toast.error(errorMessage);
    }
  };
  // This component renders a login form with fields for email, password, and user role selection.
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-500 rounded-md p-4 m-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center">Login</h1>

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
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventhandler}
              placeholder="Enter your password"
            ></Input>
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

          <div className="flex items-center justify-between my-4">
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="flex items-center justify-center my-5">
            <button
              type="submit"
              className="bg-[#23dc12] hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </div>

          <div className="text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

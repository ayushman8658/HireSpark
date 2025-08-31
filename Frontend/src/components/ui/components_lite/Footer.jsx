import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; 

const Footer = () => {
  return (
    <div>
      {/* footer for current page */}
      <div className="w-full h-auto py-4 bg-gray-200 text-black flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        {/* Copyright */}
        <p className="text-sm text-gray-700">
          &copy; 2025 All rights reserved by{" "}
          <span className="font-semibold">HireSpark</span>
        </p>

        {/* Policy Links */}
        <div className="flex space-x-4">
          <Link to={"/PrivacyPolicy"}>
            <span className="text-blue-500 hover:text-blue-700">
              Privacy Policy
            </span>
          </Link>
          <Link to={"/Terms-of-service"}>
            <span className="text-blue-500 hover:text-blue-700">
              Terms of Service
            </span>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:space-x-6 text-sm text-gray-700">
          <p>
            Contact:{" "}
            <a
              href="mailto:support@hirespark.com"
              className="text-blue-600 hover:underline"
            >
              support@hirespark.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+91905422854"
              className="text-blue-600 hover:underline"
            >
              +91 90542 2854
            </a>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-xl">
          <a
            href="https://www.linkedin.com/in/ayushman2004/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ayushman8658"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/ayushman_8658/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div>
      {/* generate a footer for my current page. */}

      <div className=" text-black py-6 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 HireSpark. All rights reserved.</p>
          <p className="mt-2">
            Follow us on
            <a href="#" className="text-blue-400 hover:underline mx-2">
              Twitter
            </a>
            |
            <a href="#" className="text-blue-400 hover:underline mx-2">
              LinkedIn
            </a>
            |
            <a href="#" className="text-blue-400 hover:underline mx-2">
              Facebook
            </a>
            |
            <a href="#" className="text-blue-400 hover:underline mx-2">
              Instagram
            </a>
          </p>
          {/* add some # tag jobs profile links */}
          {/* this tage in side by side with some gap */}
          <p className="mt-2">
            <a href="#" className="text-gray-600 hover:underline mx-2">
              #Engineering
            </a>
            |
            <a href="#" className="text-gray-600 hover:underline mx-2">
              #Design
            </a>
            |
            <a href="#" className="text-gray-600 hover:underline mx-2">
              #Marketing
            </a>
            |
            <a href="#" className="text-gray-600 hover:underline mx-2">
              #Sales
            </a>
            |
            <a href="#" className="text-gray-600 hover:underline mx-2">
              #Product
            </a>
          </p>

          {/* add a link to privacy policy and terms of service */}
          <p className="mt-2">
            <a href="#" className="text-gray-600 hover:underline mx-2">
              Privacy Policy
            </a>
            |
            <a href="#" className="text-gray-600 hover:underline mx-2">
              Terms of Service
            </a>
          </p>
          <p className="mt-2 text-gray-600">Built with ❤️ by HireSpark Team</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Button } from "../button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User2 } from "lucide-react";

function Navbar() {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center  mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-3xl font-bold">
            Hire<span className="text-[#19ea06]">Spark</span>
          </h1>
        </div>
        <div className="flex item center gap-10">
          <ul className="flex gap-25 font-medium items-center ">
            <li>Home</li>
            <li>Browse</li>
            <li>Job</li>
            <li>About</li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button className="bg-[#23dc12] hover:bg-green-600 cursor-pointer">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-[#1e1f1e] hover:bg-gray-400 cursor-pointer">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex items-center gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Ayushman Mishra</h3>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2></User2>
                    <Button variant="link">Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut></LogOut>
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}


export default Navbar;

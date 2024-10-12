// components/Header.js
import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo.svg";
import cart from "../../../public/assets/cart.svg";
import { PersonIcon, SearchIcon, ThreeBarsIcon } from "@primer/octicons-react";
import { Navbar } from "../navbar";

export const Header = () => {
  return (
    <header className="bg-gray-100 p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">
            <ThreeBarsIcon size={"medium"} />
          </button>

          <button className="text-gray-700 hover:text-gray-900">
            <SearchIcon size={"medium"} />
          </button>
        </div>

        <div className="flex justify-center">
          <Image alt="" src={logo} />
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">
            <PersonIcon size={"medium"} />
          </button>

          <div className="relative">
            <button className="text-gray-700 hover:text-gray-900">
              <Image alt="" src={cart} />
            </button>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

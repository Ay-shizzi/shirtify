import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import User from "./User";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-wrap sticky top-0 z-50">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-white text-gray-900 w-screen shadow-lg">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="/">
                <p className="self-center font-guerillaFont text-lg md:text-2xl font-semibold tracking-widest cursor-pointer">
                  <span className="bg-black text-white py-2 pl-4 pr-3 rounded-full mx-1">
                    S
                  </span>
                  HIRTIFY
                </p>
              </a>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a className="hover:text-gray-200" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
              <div className="hidden md:flex items-center space-x-5">
                <CartIcon />

                {/* <Sign In Register */}

                <User />
              </div>
            </div>

            {/* Responsive navbar */}

            <div className="md:hidden flex w-28 gap-3 mr-6 items-center">
              <User />
              <Menu />
            </div>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Navbar;

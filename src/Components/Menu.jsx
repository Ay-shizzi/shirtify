import React, { useState } from "react";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "#" },
  { id: 3, title: "Service", url: "#" },
  { id: 4, title: "FAQ", url: "#" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hover:text-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-16 w-full h-96 bg-gray-900 text-gray-100 flex items-center justify-center flex-col gap-4 z-50">
          {links.map((link) => (
            <Link
              className="w-full text-center p-4 border-b-2 border-gray-100 hover:bg-gray-100 hover:text-gray-900"
              to={link.url}
              key={link.id}
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <CartIcon onClick={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default Menu;

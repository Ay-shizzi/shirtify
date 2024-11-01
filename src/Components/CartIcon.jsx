import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CartIcon = ({ onClick }) => {
  const { cartCount } = useCart();

  return (
    <>
      <button
        onClick={onClick}
        className="py-4 px-1 relative border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
      >
        <Link to="/shoppingcart" aria-label="Cart">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span className="absolute inset-0 object-right-top -mr-6">
            <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
              {cartCount}
            </div>
          </span>
        </Link>
      </button>
    </>
  );
};

CartIcon.propTypes = {
  onClick: PropTypes.func, // Making onClick prop optional
};

export default CartIcon;

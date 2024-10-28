import { useState } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ onCategoryChange }) => {
  Dropdown.propTypes = {
    onCategoryChange: PropTypes.func.isRequired,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemText) => {
    setSelectedItem(itemText);
    setIsOpen(false);
    if (itemText === "All") {
      onCategoryChange(null);
    } else {
      onCategoryChange(itemText);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center w-full px-4 py-2 bg-black text-white rounded-sm shadow-md hover:bg-gray-700 focus:outline-none "
      >
        {selectedItem || "Category"}
        <svg
          className="w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <div className="py-1">
            <p
              onClick={() => handleItemClick("All")}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              All
            </p>
            <p
              onClick={() => handleItemClick("Shirt")}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Shirt
            </p>
            <p
              onClick={() => handleItemClick("Short")}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Short
            </p>
            <p
              onClick={() => handleItemClick("Hoodie")}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Hoodie
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

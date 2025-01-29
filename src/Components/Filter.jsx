import React from "react";
import Search from "./Search";
import DropDown from "./DropDown";
import PropTypes from "prop-types";

const Filter = ({ onSearchChange, onCategoryChange }) => {
  return (
    <div className="py-5 sm:px-10 px-6 flex justify-between items-center">
      <Search onSearchChange={onSearchChange} />
      <DropDown onCategoryChange={onCategoryChange} />
    </div>
  );
};

Filter.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default Filter;

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";

const Search = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };
  return (
    <div>
      <div className="sm:max-w-sm max-w-[10rem] relative ">
        <input
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2"
          type="text"
          placeholder="Search"
        />
        <div className="absolute right-0 top-0 pr-3 flex items-center h-full">
          <FiSearch className=" h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;

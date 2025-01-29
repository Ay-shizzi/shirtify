import { useState, useEffect } from "react";
import Card from "../Components/Card";
import Filter from "../Components/Filter";
import Newsletter from "../Components/Newsletter";
import SlideShow from "../Components/SlideShow";
import PropTypes from "prop-types";

const Home = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-900 animate-spin"></div>
          </div>
        </div>
      ) : (
        <>
          <SlideShow />
          <Filter
            onSearchChange={handleSearchChange}
            onCategoryChange={handleCategoryChange}
          />
          <Card
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            addToCart={addToCart}
          />
          <Newsletter />
        </>
      )}
    </div>
  );
};

Home.propTypes = {
  addToCart: PropTypes.func,
};

export default Home;

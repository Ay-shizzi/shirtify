import Data from "../assets/Data";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ searchQuery, selectedCategory }) => {
  Card.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    selectedCategory: PropTypes.string,
  };

  const navigate = useNavigate();

  const handleDetails = (data) => {
    const _id = data.title;
    const id = _id.toLowerCase().split(" ").join("");
    navigate(`product/${id}`, {
      state: {
        item: data,
      },
    });
  };

  // Filter Data based on search and selected query
  const filteredData = Data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!selectedCategory || item.category === selectedCategory)
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-10 gap-6">
      {filteredData.map((data) => (
        <div key={data.id} className="group  relative">
          <div
            onClick={() => handleDetails(data)}
            className="sm:h-56 h-32 cursor-pointer overflow-hidden grow"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-110 duration-500"
              src={data.image}
            />
          </div>
          <div className=" flex flex-col gap-3">
            <h5 className="sm:text-lg text-xs font-bold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h5>
            <div className="flex justify-between items-center">
              <div>
                <p className="line-through sm:text-sm text-[8px] text-gray-400">
                  ${data.oldPrice}
                </p>
                <p className="sm:text-lg text-xs font-bold text-black">
                  ${data.newPrice}
                </p>
              </div>
              <div>
                <button
                  onClick={() => handleDetails(data)}
                  className="flex items-center gap-2 bg-black p-2 text-white hover:text-black hover:bg-white hover:border hover:border-black"
                >
                  <span className="hidden sm:inline">Add</span>
                  <FaCartShopping />
                </button>
              </div>
              <div className="absolute top-2">
                {data.Sales && (
                  <p className="bg-black text-white px-4 py-1">Sales</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

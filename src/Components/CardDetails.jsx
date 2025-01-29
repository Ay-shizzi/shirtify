import { FaCartShopping } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useCart } from "./CartContext";

const CardDetails = () => {
  const [productCount, setProductCount] = useState(1);
  const [details, setDetails] = useState({});
  const { addToCart } = useCart();

  const handleIncrease = () => {
    setProductCount(productCount + 1);
  };
  const handleDecrease = () => {
    setProductCount(productCount === 1 ? 1 : productCount - 1);
  };

  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, [location.state.item]);

  const handleAddToCart = () => {
    const itemToAdd = { ...details, quantity: productCount };
    addToCart(itemToAdd);
  };

  return (
    <div className="flex flex-col items-center justify-center px-8 py-14 ">
      <div className="flex flex-col md:flex-row border bg-white shadow-md md:max-w-3xl md:max-h-[27rem] max-w-xl rounded-lg relative">
        <img
          src={details.image}
          alt={details.title}
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-80 md:rounded-none md:rounded-l-lg"
        />
        <div className="flex flex-col justify-center p-6 gap-4">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {details.title}
          </h1>
          <div className="flex items-center gap-3">
            <p className="text-sm line-through">${details.oldPrice}</p>
            <p className="text-lg font-bold">${details.newPrice}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <p>Customer Reviews</p>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {details.description}
          </p>
          <div className="flex gap-3">
            <div className="flex items-center h-10 gap-2 border py-2 px-3 border-black">
              <div>
                <p>Quantity</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="text-white bg-black w-5"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <p>{productCount}</p>
                <button
                  className="text-white bg-black w-5"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  handleAddToCart();
                }}
                className="flex items-center h-10 gap-2 bg-black py-2 px-3 text-white hover:text-black hover:bg-white hover:border hover:border-black"
              >
                <span className="hidden sm:inline">Add</span>
                <FaCartShopping />
              </button>
            </div>
          </div>
          <p>Category: {details.category}</p>
        </div>
        <div className="absolute top-2">
          {details.Sales && (
            <p className="bg-black text-white px-6 text-xl py-1">Sales</p>
          )}
        </div>
      </div>
      <Link to="/">
        <div className="flex font-semibold text-indigo-600 text-sm mt-10">
          <svg
            className="fill-current mr-2 text-indigo-600 w-4"
            viewBox="0 0 448 512"
          >
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Continue Shopping
        </div>
      </Link>
    </div>
  );
};

export default CardDetails;

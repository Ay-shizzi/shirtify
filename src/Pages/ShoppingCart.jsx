import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartContext";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } =
    useCart();

  const totalCost = cartItems.reduce(
    (total, item) => total + item.newPrice * item.quantity,
    0
  );

  return (
    <div className="container mx-auto mt-10">
      {cartItems.length === 0 ? (
        <div className="text-center h-[calc(100vh-6.3rem)]">
          <h1 className="font-semibold text-2xl">Your Cart is Empty</h1>
          <Link
            to="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="sm:flex shadow-md my-10 md:h-screen">
          <div className="w-full sm:w-3/4 bg-white px-10 py-10 overflow-scroll">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">
                {cartItems.length} Items
              </h2>
            </div>
            {cartItems.map((items) => {
              return (
                <div
                  key={items.id}
                  className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50"
                >
                  <div className="md:w-4/12 mb-5 md:mb-0 2xl:w-1/4 w-full">
                    <img
                      src={items.image}
                      alt={items.title}
                      className="md:h-full h-52 object-center object-cover block"
                    />
                  </div>
                  <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center gap-5">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-xl font-bold leading-none">
                        {items.title}
                      </p>
                    </div>
                    <p className="leading-3 pt-2">Price: ${items.newPrice}</p>

                    <div className="flex gap-3">
                      <div className="flex items-baseline gap-2 ">
                        <div>
                          <p className="leading-3 pt-2">Quantity</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            className="text-white bg-black w-5"
                            onClick={() => decreaseQuantity(items)}
                          >
                            -
                          </button>
                          <p>{items.quantity}</p>
                          <button
                            className="text-white bg-black w-5"
                            onClick={() => increaseQuantity(items)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <div className="flex items-center">
                        <p
                          onClick={() => removeFromCart(items)}
                          className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                        >
                          Remove
                        </p>
                      </div>
                      <p className="text-base font-bold leading-none text-gray-800">
                        Total: ${items.newPrice * items.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <Link
              to="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
          {/* Order Summary */}
          <div id="summary" className="w-full sm:w-1/2 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cartItems.length}
              </span>
              <span className="font-semibold text-sm">${totalCost}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${totalCost + 10}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

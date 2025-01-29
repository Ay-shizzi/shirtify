import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Nav = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { cartCount } = useCart();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="shadow-lg sticky top-0 z-50">
      <Navbar fluid>
        <Navbar.Brand>
          <p className="self-center font-guerillaFont text-lg md:text-2xl font-semibold tracking-widest cursor-pointer">
            <span className="bg-black text-white py-2 pl-4 pr-3 rounded-full mx-1">
              S
            </span>
            HIRTIFY
          </p>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User" img={user?.photoURL} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : null}
        </div>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">FAQ</Navbar.Link>

          <Link to="/shoppingcart">
            {user ? (
              <div className="relative">
                <p className=" block py-2 pl-3 pr-4 text-base md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700  md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent">
                  <HiOutlineShoppingBag />
                </p>
                <div className="absolute top-0 md:right-0 left-8 md:left-0 transform md:translate-x-3 md:-translate-y-3 flex items-center justify-center w-5 h-5 bg-red-500 text-white rounded-full">
                  {cartCount}
                </div>
              </div>
            ) : null}
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;

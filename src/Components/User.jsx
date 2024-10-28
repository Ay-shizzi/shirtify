import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const User = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    <div className="relative inline-block text-left">
      <div className="group">
        <div className="relative inline-block cursor-pointer">
          <img
            src={user?.photoURL}
            className="object-cover w-10 h-10 rounded-full "
          />
          <span className="absolute animate-pulse top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <div className="absolute z-50 left-[-150px] w-52 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm font-bold text-gray-700"
            >
              {user?.displayName}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm font-bold text-gray-700"
            >
              {user?.email}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleSignOut}
            >
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

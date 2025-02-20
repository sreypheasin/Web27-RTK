import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { FaCartArrowDown } from "react-icons/fa6";
import {
  fetchUser,
  selectToken,
  selectUser
} from "../../features/auth/authSlice";

export default function Navbar() {
  const totalQty = useSelector((state) => state.cartR.totalQty);
  const countValue = useSelector((state) => state.counterR.countValue);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  console.log(countValue);
  const menu = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/products",
      title: "Product"
    },
    {
      path: "#",
      title: `${countValue}`
    }
  ];
  useEffect(() => {
    dispatch(fetchUser(token));
  }, []);
  return (
    <nav className="mb-5 bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menu.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-800" : "text-gray-800"
                  }
                  aria-current="page"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <li className="">
              <FaCartArrowDown className="absolute" />
              <span className="relative -top-3 -right-4 bg-red-500 text-white rounded-3xl py-0.5 px-2.5">
                {totalQty}
              </span>
            </li>
            {token && (
              <li>
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.image}
                  alt="Rounded avatar"
                />
              </li>
            )}
            <NavLink
              to="/login"
              className="bg-blue-700 text-white py-2 px-5 hover:bg-blue-800 rounded-md"
            >
              {token ? "Log out" : "Login"}
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

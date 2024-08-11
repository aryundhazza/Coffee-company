"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
export default function NavbarNew() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 w-full z-20 top-0 shadow-sm shadow-orange-400 sticky">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://cdn.pixabay.com/photo/2022/03/09/05/05/coffee-7057030_1280.png"
            className="h-10 w-auto"
            alt="Logo"
          />
          <span className="self-center text-2xl whitespace-nowrap text-orange-500 font-serif">
            Janji Suci
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-black  bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => {
              open ? setOpen(false) : setOpen(true);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className={
            open
              ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
              : "items-center hidden justify-between w-full md:flex md:w-auto md:order-1"
          }
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg 0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800  :border-gray-700">
            <li>
              <a
                href="/"
                className={
                  path === "/"
                    ? "block py-2 px-3 text-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0"
                    : "block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 "
                }
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={
                  path === "/about"
                    ? "block py-2 px-3 text-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0"
                    : "block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 "
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className={
                  path === "/services"
                    ? "block py-2 px-3  text-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0"
                    : "block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 "
                }
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/testimonials"
                className={
                  path === "/testimonials"
                    ? "block py-2 px-3  text-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0"
                    : "block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 "
                }
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="/teams"
                className={
                  path === "/teams"
                    ? "block py-2 px-3  text-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0"
                    : "block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 "
                }
              >
                Teams
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className={
                  path === "/blog"
                    ? "block py-2 px-3  text-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0"
                    : "block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 "
                }
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

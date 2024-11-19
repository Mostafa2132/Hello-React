




import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed flex flex-wrap z-50 sm:justify-start sm:flex-nowrap w-full bg-[#2c3e50] text-sm dark:bg-[#2c3e50] transition-all duration-300 ${
        scrolled ? "py-3 shadow-lg" : "py-4"
      }`}
    >
      <nav className="max-w-[79rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link
            className="flex-none uppercase text-3xl font-extrabold dark:text-white focus:outline-none focus:opacity-80"
            to="/home"
            aria-label="Brand"
          >
            Start Framework
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-10 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              id="hs-navbar-example-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-example"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-example"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <NavLink
              className={({ isActive }) =>
                `font-medium text-xl uppercase text-white focus:outline-none ${
                  isActive
                    ? "bg-[#1abc9c] rounded-md px-2 py-1 text-white"
                    : ""
                }`
              }
              to="/about"
              aria-current="page"
            >
              About
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `font-medium text-xl uppercase text-white focus:outline-none ${
                  isActive
                    ? "bg-[#1abc9c] rounded-md px-2 py-1 text-white"
                    : ""
                }`
              }
              to="/portfolio"
            >
              Portfolio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-medium text-xl uppercase text-white focus:outline-none ${
                  isActive
                    ? "bg-[#1abc9c] rounded-md px-2 py-1 text-white"
                    : ""
                }`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

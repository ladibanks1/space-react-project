import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navRef = useRef(false);
  const hamburgerRef = useRef(false);

  const navContainer = () => {
    navRef.current.classList.toggle("hidden");
  };
  const hamburgerButton = () => {
    hamburgerRef.current.classList.toggle("hidden");
  };
  const navLink = ({ isActive }) =>
    isActive
      ? "my-2 border-r-2 border-r-white w-full sm:border-b-2 sm:border-r-0 sm:py-9"
      : "my-2 hover:border-r-2 hover:border-r-white w-full sm:hover:border-b-2 sm:hover:border-r-0 sm:py-9 hover:animate-pulse cursor-pointer";
  return (
    <>
      <header className="sm:flex justify-between h-[88px] sm:h-[136px] items-center">
        <div className="grow ms-10 h-[40px] sm:h-[48px] py-3 sm:p-0 md:pe-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            className="inline"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>
        <div>
          <hr className="relative left-5 z-20 rule " />
        </div>
        <nav ref={navRef} className="hidden sm:flex navbar">
          <div
            className="absolute right-5 top-5 cursor-pointer inline sm:hidden"
            onClick={() => {
              navContainer();
              hamburgerButton();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          </div>
          <NavLink className={navLink} to={"/"}>
            00 <span>Home</span>
          </NavLink>
          <NavLink className={navLink} to={"/destination"}>
            01 <span>Destination</span>
          </NavLink>
          <NavLink className={navLink} to={"/crew"}>
            02 <span>Crew</span>
          </NavLink>
          <NavLink className={navLink} to={"/technology"}>
            03 <span>Technology</span>
          </NavLink>
        </nav>
        <button
          className="absolute right-0 top-0 p-6 sm:hidden h-[40px]"
          ref={hamburgerRef}
          onClick={() => {
            navContainer();
            hamburgerButton();
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        </button>
      </header>
    </>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import { Link, useLocation } from "react-router-dom";
const NavigationBar = () => {
  const [navActive, setNavActive] = useState("home");
  const location = useLocation();
  const searchPage = location.pathname.includes("search");
  const libraryPage = location.pathname.includes("library");
  const notHomepage =
    location.pathname.includes("album") || location.pathname.includes("artist");
  useEffect(() => {
    if (searchPage === false && libraryPage === false) {
      notHomepage ? setNavActive(null) : setNavActive("home");
    }
  }, [location]);
  return (
    <div className="navigation-bar">
      <Link
        to={"/"}
        className={`navigation-home ${
          navActive === "home" ? "nav-active" : ""
        }`}
        onClick={() => setNavActive("home")}
      >
        <svg
          className="navigation-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#ffffff"
          fill="none"
        >
          <path
            d="M7.08848 4.76364L6.08847 5.54453C4.57182 6.72887 3.81348 7.32105 3.40674 8.15601C3 8.99097 3 9.95552 3 11.8846V13.9767C3 17.763 3 19.6562 4.17157 20.8325C5.11466 21.7793 6.52043 21.964 9 22V18.0057C9 17.0738 9 16.6078 9.15224 16.2403C9.35523 15.7502 9.74458 15.3609 10.2346 15.1579C10.6022 15.0057 11.0681 15.0057 12 15.0057C12.9319 15.0057 13.3978 15.0057 13.7654 15.1579C14.2554 15.3609 14.6448 15.7502 14.8478 16.2403C15 16.6078 15 17.0738 15 18.0057V22C17.4796 21.964 18.8853 21.7793 19.8284 20.8325C21 19.6562 21 17.763 21 13.9767V11.8846C21 9.95552 21 8.99097 20.5933 8.15601C20.1865 7.32105 19.4282 6.72887 17.9115 5.54453L16.9115 4.76364C14.5521 2.92121 13.3724 2 12 2C10.6276 2 9.44787 2.92121 7.08848 4.76364Z"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          ></path>
        </svg>
        Home
      </Link>
      <Link
        to={"/search"}
        className={`navigation-search ${
          navActive === "search" ? "nav-activeStroke" : ""
        }`}
        onClick={() => {
          setNavActive("search");
        }}
      >
        <svg
          className="navigation-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#ffffff"
          fill="none"
        >
          <path
            d="M17 17L21 21"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        Search
      </Link>
      <Link to={"/library"}  className={`navigation-library ${
          navActive === "library" ? "nav-active" : ""
        }`}
        onClick={() => {
          setNavActive("library");
        }}>
        <svg className="navigation-icon"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="10"
            height="80"
            rx="2"
            ry="2"
            fill="white"
          />

          <rect
            x="30"
            y="10"
            width="10"
            height="80"
            rx="2"
            ry="2"
            fill="white"
          />

          <path
            d="M50,12 
           Q51,10 53,11 
           L77,19 
           Q80,20 80,23 
           L80,77 
           Q80,80 77,81 
           L53,89 
           Q51,90 50,88 
           Z"
            fill="white"
          />
        </svg>
        Library
      </Link>
    </div>
  );
};

export default NavigationBar;

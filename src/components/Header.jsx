import React, { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { NavBarContext } from "../provider/NavBarProvider";
import { useMediaQuery } from "react-responsive";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { navPos, setNavPos, query, setQuery } = useContext(NavBarContext);
  const searchBxRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 740px)" });

  const navBarOptions = [
    {
      name: "All",
      onTap: () => {
        setNavPos("all");
      },
    },
    {
      name: "Active",
      onTap: () => {
        setNavPos("active");
      },
    },
    {
      name: "Inactive",
      onTap: () => {
        setNavPos("inactive");
      },
    },
  ];

  const searchQuery = (query) => {
    setQuery(query);
  };

  return (
    <div className="header">
      <span className="titleName">Students</span>
      <div
        ref={searchBxRef}
        className={`searchBx ${openSearch ? "active" : ""}`}
      >
        <input
          type="text"
          name=""
          id="search"
          className="searchInput"
          placeholder="Search by Name"
          value={query}
          onChange={(e) => searchQuery(e.target.value)}
        />
      </div>
      <div className="optionBx" style={{ width: isMobile ? "200px" : "500px" }}>
        <FontAwesomeIcon
          icon={openSearch ? faXmark : faMagnifyingGlass}
          onClick={() => {
            openSearch ? setOpenSearch(false) : setOpenSearch(true);
          }}
          style={{ height: "20px", width: "20px", cursor: "pointer" }}
        />

        {isMobile ? (
          <FontAwesomeIcon
            icon={openMenu ? faXmark : faBars}
            onClick={() => {
              openMenu ? setOpenMenu(false) : setOpenMenu(true);
            }}
            style={{ height: "20px", width: "20px", cursor: "pointer" }}
          />
        ) : (
          navBarOptions.map((val) => (
            <div
              className={`options ${
                navPos === val.name.toLowerCase() ? "active" : ""
              }`}
              onClick={val.onTap}
            >
              {val.name}
            </div>
          ))
        )}
        <div className={`sideMenu ${openMenu ? "active" : ""}`}>
          {navBarOptions.map((val) => (
            <div style={{ cursor: "pointer" }} onClick={val.onTap}>
              {val.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;

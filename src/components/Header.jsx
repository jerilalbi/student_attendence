import React, { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { NavBarContext } from "../provider/NavBarProvider";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const { navPos, setNavPos } = useContext(NavBarContext);
  const searchBxRef = useRef(null);

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

  return (
    <div className="header">
      <span className="titleName">Students</span>
      <div
        ref={searchBxRef}
        className={`searchBx ${openSearch ? "active" : ""}`}
      >
        <input type="text" name="" id="search" className="searchInput" />
      </div>
      <div className="optionBx">
        <FontAwesomeIcon
          icon={openSearch ? faXmark : faMagnifyingGlass}
          onClick={() => {
            openSearch ? setOpenSearch(false) : setOpenSearch(true);
          }}
          style={{ height: "20px", width: "20px", cursor: "pointer" }}
        />

        {navBarOptions.map((val) => (
          <div
            className={`options ${
              navPos === val.name.toLowerCase() ? "active" : ""
            }`}
            onClick={val.onTap}
          >
            {val.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;

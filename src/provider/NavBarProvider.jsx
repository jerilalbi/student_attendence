import { createContext, useState } from "react";

export const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [navPos, setNavPos] = useState("all");
  const [query, setQuery] = useState("");
  return (
    <NavBarContext.Provider value={{ navPos, setNavPos, query, setQuery }}>
      {children}
    </NavBarContext.Provider>
  );
};

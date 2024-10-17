import { createContext, useState } from "react";

export const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [navPos, setNavPos] = useState("all");
  return (
    <NavBarContext.Provider value={{ navPos, setNavPos }}>
      {children}
    </NavBarContext.Provider>
  );
};

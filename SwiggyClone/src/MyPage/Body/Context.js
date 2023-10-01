import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const DataProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [filterRestData, setFilterRestData] = useState([]);

  // console.log(children)
  
  return (
    <Context.Provider value={{ searchText, setSearchText,filterRestData, setFilterRestData }}>
      {children}
    </Context.Provider>
  );
};
Context.displayName="EmpireVikash" // It will show at contextProvider on Component tool in console 
export const useData = () => useContext(Context);

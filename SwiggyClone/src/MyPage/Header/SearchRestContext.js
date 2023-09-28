import React, { createContext, useContext, useState } from "react";

const SearchRestContext = createContext();

export const DataProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  console.log(children)
  
  return (
    <SearchRestContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchRestContext.Provider>
  );
};
SearchRestContext.displayName="EmpireVikash" // It will show at contextProvider on Component tool in console 
export const useData = () => useContext(SearchRestContext);

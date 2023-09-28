import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataFilter, setDataFilter] = useState([]);
  console.log(children)
  
  return (
    <DataContext.Provider value={{ dataFilter, setDataFilter }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

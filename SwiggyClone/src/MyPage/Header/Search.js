import search from "../ImageFolder/search.png";
import { useState } from "react";
import { useData } from "./SearchRestContext.js";

const Search = () => {
  const { setSearchText } = useData();
  const [inputText, setInputText] = useState("");

  return (
    <div className="search">
      <input
        placeholder="Find your food"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          setSearchText(inputText);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setSearchText(inputText);
          }
        }}
      />
      <img
        src={search}
        alt=""
        className="search-icon"
        onClick={() => setSearchText(inputText)}
      />
    </div>
  );
};

export default Search;

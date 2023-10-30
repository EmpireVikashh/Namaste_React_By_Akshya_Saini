import { useEffect, useState } from "react";
import { useData } from "../Body/Context.js";

const Search = () => {
  const { setSearchText } = useData();
  const [inputText, setInputText] = useState("");

  useEffect(()=>{
      setSearchText(inputText);
  },[inputText,setSearchText])

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
    </div>
  );
};

export default Search;

import search from "../ImageFolder/search.png";
import { useState } from "react";
// import RestaurantData from "../../SwiggyJsonData/myJson.json";
import { useData } from "./DataContext";

const Search = () => {
  const { dataFilter, setDataFilter } = useData();
  const [inputText, setInputText] = useState("");

  function filterData() {
    // setDataFilter(RestaurantData.card.topRestaurants.restaurants);
    setDataFilter(inputText);
  }
  console.log(dataFilter, "1");

  return (
    <div className="search">
      <input
        placeholder="Find your food"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            filterData(inputText);
          }
        }}
      />
      <img
        src={search}
        alt=""
        className="search-icon"
        onClick={() => filterData(inputText)}
      />
    </div>
  );
};

export default Search;

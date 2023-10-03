import React from "react";

const arrayOfObjects = [
  {
    info: {
      cuisins: [1, 2, 3],
    },
  },
  {
    info: {
      cuisins: [4, 5, 6],
    },
  },
  {
    info: {
      cuisins: [7, 8, 9],
    },
  },
];

const CuisineList = () => {
  return (
    <ul>
      {arrayOfObjects.map((item, index) => (
        <li key={index}>
          {item.info.cuisins.map((cuisin, subIndex) => (
            <span key={subIndex}>{cuisin}</span>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default CuisineList;

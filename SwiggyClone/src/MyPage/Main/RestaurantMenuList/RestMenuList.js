import "./restMenuList.css";
import { useParams } from "react-router-dom";
import { useData } from "../../Body/Context.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "../../ReduxStore/cartSlice";
import { nanoid } from "@reduxjs/toolkit";
import Header from "../../Header/Header.js";
import { useEffect } from "react";

const RestaurantMenuList = () => {
  let cuisines = [
    "Idli Dosa",
    "Pizzas",
    "Maggie",
    "Burgers",
    "Aloo potato",
    "Fried rice",
    "Desserts",
    "Butter Maggie",
    "Burgers",
    "Biryani",
    "Chili Potato",
    "Snacks",
    "Mashroom",
    "Pastas",
    "Italian-Pizzas",
    "Ice-Creams",
    "Cold Drinks",
    "Kaju korma",
    "Butter Paneer",
  ];

  useEffect(()=>{
  // Because i want to load my page initially from top, and we does'nt want to go at top again after click on any btn
    document.documentElement.scrollTop = 0;
  },[])

  // it will give us id of restaurant
  const param = useParams();
  const { id } = param;
  console.log(id);

  const { filterRestData } = useData();
  // console.log(filterRestData);

  const clickedRest = filterRestData.find((res) => res.info.id === id);
  console.log(clickedRest);

  const cartItems = useSelector((store) => store.cart.items); //from redux part
  console.log(cartItems);

  // send item in our store
  const dispatch = useDispatch();
  const addFoodItems = (menuItems) => {
    dispatch(addItem(menuItems));
  };

  return (
    <div className="menu-list">
      {/* <div className="cart-header">
        {!clickedRest ? (
          <h2 style={{ margin: "7px 0 0 0" }}>Restaurant Name : Loading...</h2>
        ) : (
          <h2 style={{ margin: "7px 0 0 0" }}>
            Restaurant Name : {clickedRest.info.name}
          </h2>
        )}
        <Link to="/cart">
          <h2 className="cart-Text">
            Cart &nbsp; <span>{cartItems.length}</span>
          </h2>
          <img src={addCartImage} alt="cartimg" />
        </Link>
      </div> */}

      <Header />

      <div className="menu-list-item">
        <div id="rest_info">
          <div id="restBackgroung">
            {/* src={CloudImageIdLink + clickedRest?.info?.cloudinaryImageId} */}
            <img
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/jordan-food-cover.jpg"
              alt="myphoto"
            />
          </div>
          <div className="rest_name_rating">
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/013/743/123/small/five-stars-rating-icon-png.png"
              alt="ratings"
            />
            <h2>Welcome to <br />
              "{clickedRest?.info?.name}"</h2>
          </div>
          <div className="rest_details">
            <p>{clickedRest?.info?.costForTwo}</p>
            <p>{clickedRest?.info?.cuisines.join(", ")}</p>
            <p>
              {clickedRest?.info?.areaName}, {clickedRest?.info?.locality}{" "}
            </p>
          </div>
        </div>

        {cuisines.map((menuItems, idx) => (
          <div className="items" key={idx}>
            <div className="item-price">
              <h3>{menuItems}</h3>
              <p className="price">
                {Math.floor(Math.random() * (300 - 150 + 1)) + 150}₹
                <span className="discount">
                  {Math.floor(Math.random() * 11) + 10}% OFF | USE @Empire
                </span>
              </p>
            </div>
            <button
              onClick={() => {
                addFoodItems({
                  id: nanoid(),
                  itemNo: idx,
                  item: menuItems,
                  price: Math.floor(Math.random() * (300 - 150 + 1)) + 150,
                  quantity: 1,
                });
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenuList;

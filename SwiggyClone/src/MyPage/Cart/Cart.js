import "./cart.css";
import { useSelector, useDispatch } from "react-redux"; // it is subscribing our store
import { decreaseItem, increaseItem } from "../ReduxStore/cartSlice";

const Cart = () => {
  // const store = useSelector((store)=>store)// it will give us whole store that is not a good way
  const cartItems = useSelector((store) => store.cart.items); // here we subscribing only item part
  console.log("cart", cartItems);


  const dispatch = useDispatch();
  const increaseFoodItem = (itemNo) => {
    dispatch(increaseItem(itemNo));
  };

  const decreaseFoodItem = (itemNo) => {
    dispatch(decreaseItem(itemNo));
  };

  const totalPayment = cartItems.reduce((acc,curr)=>{
    acc = acc + curr.price;
    return acc;
  },0)

  return (
    <div id="My-cart">
      <h2 className="itemLength">{cartItems.length} - Items</h2>
      <div className="cartAndPayment">
        <div className="My_Cart_List">
          {cartItems.map((myItem, idx) => (
            <div className="cart-card" key={myItem.id}>
              <div className="item-image">
                <img src={myItem.imageData} alt="itemImage" />
              </div>
              <div className="my-Item">
                <h3>{myItem.item}</h3>
                <p>₹{myItem.price}</p>
              </div>
              <div className="add-remove">
                <button
                  id="++addBtn"
                  onClick={() => {
                    increaseFoodItem(myItem.itemNo);
                  }}
                >
                  +
                </button>
                <p>{myItem.quantity}</p>
                <button
                  id="--removeBtn"
                  onClick={() => {
                    decreaseFoodItem(myItem.itemNo);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="totalPaymentList">
          {cartItems.map((myItem, idx) => (
            <div className="Total_Item" key={myItem.id}>
              <p>{myItem.quantity}</p>
              <h3>{myItem.item}</h3>
              <p>₹{myItem.price}</p>
            </div>
          ))}
          <div className="toPayment">
            <span>TO PAY</span>
            <span>₹{totalPayment}</span> 
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;

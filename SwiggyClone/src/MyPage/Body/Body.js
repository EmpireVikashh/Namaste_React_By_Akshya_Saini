import ShimmerEffect from "../ShimmerEffect/ShimmerEffect.js";
import RestaurantData from "../Helper/RestaurantData.js";
import { DataProvider } from "./Context.js";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../ReduxStore/store.js";
const Body = () => {
  const data = RestaurantData();

  return !data ? (
    <ShimmerEffect />
  ) : (
    <div id="body">
      <Provider store={store}>  {/* It is redux things  & store is also a props*/}
      <DataProvider>
        {/* Outlet help us to call child routes from parents routs conmponents */}
        <Outlet />
      </DataProvider>
      </Provider>
    </div>
  );
};
export default Body;

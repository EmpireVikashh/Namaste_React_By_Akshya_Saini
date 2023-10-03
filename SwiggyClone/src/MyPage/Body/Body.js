import ShimmerEffect from "../ShimmerEffect/ShimmerEffect.js";
import RestaurantData from "../Helper/RestaurantData.js";
import { DataProvider } from "./Context.js";
import { Outlet } from "react-router-dom";
const Body = () => {
  const data = RestaurantData();

  return !data ? (
    <ShimmerEffect />
  ) : (
    <div id="body">
      <DataProvider>
        {/* Outlet help us to call child routes from parents routs conmponents */}
        <Outlet />
      </DataProvider>
    </div>
  );
};
export default Body;

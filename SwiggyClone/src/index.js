import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './MyPage/Body/Body.js'
import Main from './MyPage/Main/MainPage/Main';
import Login from './MyPage/Login/Login.js'
import SignUp from './MyPage/SignUp/SignUp.js'
import Cart from './MyPage/Header/Cart.js'
import Error from './MyPage/ErrorPage/Error.js'
import RestaurantMenuList from './MyPage/Main/RestaurantMenuList/RestMenuList.js'
import{createBrowserRouter,RouterProvider} from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    errorElement:<Error/>,// incase anything not be loaded the my errorComponent will fire
    children:[
      {
        path:"/",
        element:<Main/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurantMenuList/:id",
        element:<RestaurantMenuList/>
      }
    ]
  }
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter}/>
);


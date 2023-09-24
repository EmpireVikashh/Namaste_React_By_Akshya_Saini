import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './MyPage/Body/Body.js'
import Login from './MyPage/Login/Login.js'
import SignUp from './MyPage/SignUp/SignUp.js'
import Cart from './MyPage/Header/Cart.js'
import Error from './MyPage/ErrorPage/Error.js'
import{createBrowserRouter,RouterProvider} from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    errorElement:<Error/>// incase anything not be loaded the my errorComponent will fire
  },
  // {
  //   path:"/body",
  //   element:<Body/>
  // },
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
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter}/>
);


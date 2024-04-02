import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Transection from "../Pages/Transection/Transection";

// import Income from "../Pages/Income/Income";
// import Expenses from "../Pages/Expenses/Expenses";
// import AboutUs from "../Pages/AboutUs/AboutUs";
// import ContactUs from "../Pages/ContactUs/ContactUs";
import MainLayOut from "../LayOut/MainLayOut";
import Expenses from "../Pages/Expenses/Expenses";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import User from "../Pages/User/User";
import Incomes from "../Pages/Income/Incomes";

const router1 = createBrowserRouter([{
  path : "/",
  element : <MainLayOut/>,
  children : [{
   index : true,
   element : <Dashboard/>, 
  },
  {path : "/transection",
  children : [{
    index: true,
    element : <Transection/>,
  }]},
  {path : "/expenses",
  children : [{
    index: true,
    element : <Expenses/>,
  }]},{path : "/incomes",
  children : [{
    index: true,
    element : <Incomes/>,
  }]},
  
  {path : "/aboutus",
  children : [{
    index: true,
    element : <About/>,
  }]},
  {path : "/conactus",
  children : [{
    index: true,
    element : <Contact/>,
  }]},
  {
    path:'/profile',
    element:<userProtected/>
  },
  {
    element : <userProtected/>,
    children : [
      {path : "profile",
       element: <User/>  
    },
    ]
  },   
 ]

},
{path : "/Login",
children : [{
  index: true,
  element : <Login/>,
}]},
]);

const AppRouter = () => {
  return  <RouterProvider router={router1}/>;
}

export default AppRouter;
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../../pages/HomePage";
import ProtectedRoutes from "../ProtectedRoutes";
import Login from "../../../Authentication/LoginForm";
import Signup from "../../../Authentication/SignupForm";



export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
        
      },
      // {
      //   path: "/payment",
      //   element: <RazorpayPayment />,
        
      // }
     
    ],
  },
  {
    path: "/",
    element: <Login />,
    
  },
  {
    path: "/signup",
    element: <Signup />,
    
  },
]);

export default router;
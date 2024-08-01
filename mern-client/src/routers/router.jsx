import {
  createBrowserRouter,
  RouterProvider,
  useParams,
}
  from "react-router-dom";
import App from '../App';
import Home from '../home/Home';
import Shop from '../shop/Shop';
import About from '../components/About';
import Blog from '../components/Blog';
import SingleBook from "../shop/SingleBook";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
const router = createBrowserRouter([{

  path: "/",
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },

    {
      path: '/shop',
      element: <Shop />
    },

    {
      path: '/about',
      element: <About />
    },
    
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/book/:_id',
      element: <SingleBook />,
      loader: ({ Params }) => fetch('https://book-store-0abb.onrender.com/book/${params._id}')
    },
   
  ]
},


{
  path: "/admin/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      path: "/admin/dashboard",
      element: <PrivateRoute> <Dashboard /> </PrivateRoute>
    },
    {
      path: "/admin/dashboard/upload",
      element: <UploadBooks />
    },
    {
      path: "/admin/dashboard/manage",
      element: <ManageBooks />
    },
    {
      path: "/admin/dashboard/edit-books/:_id",
      element: <EditBooks />,
    //  loader: ({ Params }) => fetch('https://localhost:5000/book/${params.id}')
        Loader : async ({ params }) => {
        try {
          const response = await fetch(`https://book-store-0abb.onrender.com/book/${params.id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Failed to fetch:', error);
          throw error;
        }
      }
      
    },
  ]
},
{
  path: "sign-up",
  element: <Signup/>
},
{
  path: "login",
  element: <Login/>
},
{
  path: "logout",
  element: <Logout />
}
]);

export default router;




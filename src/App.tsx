import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetal from "./pages/BookDetail";
import BookDetail from "./pages/BookDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Error />
  },
  {
    path: "/books",
    element: <Layout><Books/></Layout>,
  },
  {
    path: "/signup",
    element: <Layout><Signup/></Layout>,
  },
  {
    path: "/reset",
    element: <Layout><ResetPassword/></Layout>,
  },
  {
    path: "/login",
    element: <Layout><Login/></Layout>,
  },
  {
    path: "/book/:bookId",
    element: <Layout><BookDetail/></Layout>,
  },
]);

function App() {

  return (
    <BookStoreThemeProvider>
        
      <RouterProvider router={router} />
      
    </BookStoreThemeProvider>
    );

}

export default App;

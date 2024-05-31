import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Error from "./components/common/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Error />
  },
  {
    path: "/books",
    element: <Layout><div>도서 목록</div></Layout>,
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

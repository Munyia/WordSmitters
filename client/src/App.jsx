import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Filter from "./components/Filter";
import BookList from "./components/BookList";
import data from "./components/data";
import Books from "./pages/Books";
import Terms from "./components/Terms";
import About from "./pages/About";
import Community from "./components/Community";
import Conduct from "./components/Conduct";
import HowItWorks from "./components/HowItWorks";
import Guarantee from "./components/Guarantee";
import Privacy from "./components/Privacy";
import Cooker from "./components/Cooker";
import Layout from "./components/Layout";
import BookPage from "./pages/BookPage";
import Categories from "./pages/Categories";

function App() {
  function isLoggedIn() {
    return !!localStorage.getItem("token");
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "books",
          element: <Books />,
          children: [
            { index: true, element: <BookList list={data} /> },
            { path: ":search", element: <Filter list={data} /> },
          ],
        },
        {
          path: "terms",
          element: <Terms />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "community",
          element: <Community />,
        },
        {
          path: "conduct",
          element: <Conduct />,
        },
        {
          path: "howitworks",
          element: <HowItWorks />,
        },
        { path: "/guarantee", element: <Guarantee /> },
        { path: "/privacy", element: <Privacy /> },
        { path: "/cooker", element: <Cooker /> },
        { path: "/bookpage", element: <BookPage /> },
        { path: "/categories", element: <Categories /> },
      ],
    },
    {
      path: "signup",
      element: !isLoggedIn() ? <SignUp /> : <Navigate to={"/"} />,
    },
    {
      path: "/login",
      element: !isLoggedIn() ? <Login /> : <Navigate to={"/"} />,
    },
    {
      path: "/writers",
      element: <Layout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

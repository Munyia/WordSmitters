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
import Layout from "./components/Layout";
import BookPage from "./pages/BookPage";
import Categories from "./pages/Categories";
import UserProfile from "./pages/UserProfile";
import WriterProfile from "./pages/WriterProfile";
import DeleteModal from "./components/DeleteModal";
import UpdateProfile from "./pages/UpdateProfile";
import SignupWriters from "./pages/SignupWriters";
import api from "./utils/api";
import TextAreaWithParagraphs from "./pages/TextArea";
import TextArea from "./pages/TextArea";
import TopMe from "./pages/TopMe";
import LoginWriter from "./pages/LoginWriter";



function App() {
  const books = async ()=> {
    const response = await api.get("api/books");
    return response.data;
  }
  const isLoggedIn = async () => {
    try {
      const response = await api.get("api/users/profile", {
        withCredentials:true,
      });      
      return true
    } catch (error) {
      return false
    } 
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
            { index: true, element: <BookList /> },
            { path: ":search", element: <Filter /> },
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
        { path: "/read/:id", element: <BookPage /> },
        { path: "/categories", element: <Categories /> },
        { path: "/userprofile", element: <UserProfile /> },
        { path: "/writerprofile", element: <WriterProfile /> },
        { path: "/deletemodal", element: <DeleteModal /> },
        { path: "/textarea/:id?", element: <TextArea /> },
     
        
     
      ],
    },
    {
      path: "signup",
      loader: async () => {
        try {
          const response = await api.get("api/users/profile", {
            withCredentials:true,
          });      
          <Navigate to={"/"}/>
        } catch (error) {
          return false
        } 

      },
      element:  <SignUp />,
    },
    {
      path: "/signupwriters",
      loader: async () => {
        try {
          const response = await api.get("api/users/profile", {
            withCredentials:true,
          });      
          <Navigate to={"/"}/>
        } catch (error) {
          return false
        } 

      },
      element:  <SignupWriters />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/loginwriter",
      element: <LoginWriter />,
    },
    {
      path: "/updateprofile",
      element: <UpdateProfile />,
    },
    {
      path: "/topme",
      element: <TopMe />,
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

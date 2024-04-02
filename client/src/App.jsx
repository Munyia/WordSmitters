import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import llogo from './pages/Home';
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './pages/SignUp';
import BookList from './components/BookList';
import BookCard from './components/BookCard';
import data from './components/data';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element ={<Login />}/>
      <Route path="/" element ={<Home/>}/>
      <Route path="/signup" element ={<SignUp/>}/>
      <Route path="/booklist" element ={<BookList list={data}/>}/>
      <Route path="/bookcard" element ={<BookCard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

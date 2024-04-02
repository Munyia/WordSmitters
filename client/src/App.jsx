import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import llogo from './pages/Home';
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './pages/SignUp';
import Footer2 from './components/Footer2';
import Register from './pages/Register';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element ={<Login />}/>
      <Route path="/" element ={<Home/>}/>
      <Route path="/signup" element ={<SignUp/>}/>
      <Route path="/footer" element ={<Footer2/>}/>
      <Route path="/register" element ={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

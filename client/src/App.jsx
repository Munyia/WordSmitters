import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import llogo from './pages/Home';
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element ={<Login />}/>
      <Route path="/" element ={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

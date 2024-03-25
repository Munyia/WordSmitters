import './App.css'
import Header from './components/Header'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element ={<Login />}/>
      <Route path="/" element ={<Header />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

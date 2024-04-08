import './App.css'
import Home from './pages/Home';
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './pages/SignUp';
import BookList from './components/BookList';
import BookCard from './components/BookCard';
import data from './components/data';
import Dashboard from './components/Dashboard';
import Books from './pages/Books';
import Terms from './components/Terms';
import About from './pages/About';
import Community from './components/Community';
import Conduct from './components/Conduct';
import HowItWorks from './components/HowItWorks';
import Guarantee from './components/Guarantee';
import Privacy from './components/Privacy';

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
      <Route path="/dashboard" element ={<Dashboard/>}/>
      <Route path="/books/*" element ={<Books/>}/>
      <Route path="/terms" element ={<Terms/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/community" element ={<Community/>}/>
      <Route path="/conduct" element ={<Conduct/>}/>
      <Route path="/howitworks" element ={<HowItWorks/>}/>
      <Route path="/guarantee" element ={<Guarantee/>}/>
      <Route path="/privacy" element ={<Privacy/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

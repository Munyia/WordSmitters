import React, { useEffect } from "react";
import Header from "../components/Header";
import { bg0, bk1, bk2, bk3, bk4, bk5, bk8, bk10, bk14, bk15, bk22, } from "../assets";
import { Link } from "react-router-dom";
import Footer2 from "../components/Footer2";

const Home = () => {
  document.title= "Landing Page"
  useEffect(() => {
    fetch("http://localhost:4000/countries")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
 
  return (
    <div className="flex  flex-col" id="Home">
      <div className="mb-[28%]">
      <div className="h-[90vh] mb-[10%] text-sec1 ">
        <div className="flex mt-[1%]">
          <div className=" w-3/5 pl-[3%] flex flex-col gap-6">
            <h1 className=" font-extrabold text-sec text-[3rem]">
              Welcome to <span className="text-pry"> WordSmithers</span> 
            </h1>
            <div>
            <p className="text-sec  font-semibold text-3xl justify-end content-center place-content-center tracking-wide leading-relaxed font-playfair">
              "Hello and welcome to <span className=" text-pry">WordSmithers</span>, where the magic of Nigerian
              literature comes to life! 📚 Whether you're a passionate reader
              eager to explore the rich tapestry of Nigerian stories or a
              talented writer looking to share your own narrative, you've found
              the perfect place to connect, inspire, and celebrate the beauty of
              our diverse literary landscape."
            </p>
            </div>
            <div className="flex justify-around text-white">
              <Link to={"/books"} className="bg-[rgb(10,32,8)] py-2 px-6 rounded-md">
                Start Reading
              </Link>
            </div>
          </div>
          <div className=" w-2/5">
            <img src={bg0} className="w-full " alt="" />
          </div>
        </div>
        <div  id="imageContainer" className=" flex-wrap w-full px-3 gap-3 pb-3 pt-4 flex ">
          <div className=" flex gap-2 ">
  <div className="w-1/5">
  <img src={bk1} className="w-full " alt="" />
  </div>
  <div className="w-1/5">
  <img src={bk2} className="w-full " alt="" />
  </div>
  <div className="w-1/5">
  <img src={bk3} className="w-full " alt="" />
  </div>
  <div className="w-1/5">
  <img src={bk4} className="w-full " alt="" />
  </div>
  <div className="w-1/5">
  <img src={bk5} className="w-full " alt="" />
  </div>
  </div>
  <div  className=" flex gap-2">
  <div className="w-1/5">
  <img src={bk8} className="w-full " alt="" />
  </div>
  <div className="w-1/5">
  <img src={bk10} className="w-full " alt="" />
  </div>
  <div className="w-1/5">
  <img src={bk14} className="w-full " alt="" />
  </div>
  <div className="w-1/5">
  <img src={bk15} className="w-full " alt="" />
  </div>
  <div className="w-1/5">
  <img src={bk22} className="w-full " alt="" />
  </div>
  </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;

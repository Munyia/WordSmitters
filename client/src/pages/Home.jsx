import React, { useEffect } from "react";
import Header from "../components/Header";
import { bg0, bg11, bgg, bgg1 } from "../assets";
import { Link } from "react-router-dom";
import Footer2 from "../components/Footer2";

const Home = () => {
  // useEffect(() => {
  //   fetch("http://localhost:4000/countries")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);
  return (
    <div id="Home">
      <Header />
      <div className="h-[90vh]">
        <div className="flex mt-[1%]">
          <div className=" w-3/5 pl-[3%] flex flex-col gap-6">
            <h1 className=" font-extrabold text-[#CD9564] text-[3rem]">
              Welcome to WordSmithers
            </h1>
            <p className="text-sec justify-center content-center place-content-center tracking-wide leading-relaxed font-playfair">
              "Hello and welcome to WordSmithers, where the magic of Nigerian
              literature comes to life! 📚 Whether you're a passionate reader
              eager to explore the rich tapestry of Nigerian stories or a
              talented writer looking to share your own narrative, you've found
              the perfect place to connect, inspire, and celebrate the beauty of
              our diverse literary landscape."
            </p>
            <div className="flex justify-around text-white">
              <Link className="bg-[rgb(10,32,8)] py-2 px-6 rounded-md">
                Reader
              </Link>
              <Link className="bg-[rgb(10,32,8)] py-2 px-6 rounded-md">
                Writer
              </Link>
            </div>
          </div>
          <div className=" w-2/5">
            <img src={bg0} className="w-full " alt="" />
          </div>
        </div>
        <div className="flex  justify-center align-middle text-center">
          <div className="flex gap-10 mt-[5%] mb-[5%] pb-5 justify-between">
            <img src={bgg1} className="w-[30%]" alt="" />
            <img src={bgg} className="w-[40%]" alt="" />
            <img src={bg11} className="w-[30%]" alt="" />
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Home;

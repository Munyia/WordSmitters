import React, { useEffect, useState } from "react";
import logo from "../assets/res/llogo.png";
import logoB from "../assets/res/llogo.png";
import {
  BiLogoYoutube,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer2 = () => {
  const [isTransitioned, setIsTransitioned] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  

  const openModal = () => {
    setModalOpen(true);
    const timeoutId = setTimeout(() => {
      setIsTransitioned(true);
    }, 50); // 500 milliseconds delay

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeoutId);
  };

  const closeModal = () => {
    setIsTransitioned(false);
    setModalOpen(false);
  };

  // Add an effect to handle body overflow
  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    };

    handleBodyOverflow(); // Set initial body overflow

    return () => {
      // Cleanup effect
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <footer className="sm:gap-6 relative flex sm:p-16 flex-col bg-white sm:bg-pry sm:text-white w-full flex-wrap mt-[38%]">
      {/* this is for mobile version */}
      <div className=" bg-sec f-shadow rounded-2xl items-center  flex flex-col gap-4 text-white mx-auto py-[100px] px-9 text-left w-[96%]  sm:hidden">
        <p className="font-[500] text-[14px] w-3/4">
          SUBSCRIBE TO OUR NEWSLETTER
        </p>
        <p className="font-[400] text-[10px] w-3/4">
          GET UP-TO-DATE INFORMATION ABOUT WOODSMITTERS AND ITS SERVICES
        </p>
        <div className="h-[38px] flex rounded border border-black">
          <div className="flex px-2 justify-center items-center">
            <input
              type="text"
              placeholder="YOUR EMAIL"
              className="text-[12px]"
            />
          </div>
          <div className="flex px-6 justify-center items-center bg-black">
            <span className="text-[12px] font-normal text-white">
              SUBSCRIBE
            </span>
          </div>
        </div>
      </div>
      {/* this is the end of news letter for mobile version */}
      
      <div className="flex f-shadow2 pt-11 mt-24 sm:mt-0 sm:pt-0 justify-between sm:my-4 flex-col sm:flex-row items-center sm:items-start">
        <div className="flex gap-8 sm:gap-4 md:gap-10 w-[70%] flex-col sm:flex-row">
          <div className="flex w-full flex-col items-center gap-4 sm:text-[10px] md:text-[16px] font-[400] sm:w-[25%] md:w-[20%]">
            <img src={logo} alt="" className="hidden sm:block h-25" />
            <img src={logoB} alt="" className="sm:hidden h-6" />
            <div className="hidden items-center sm:flex justify-center gap-2 w-full">
              <div className="border  aspect-square flex items-center justify-center hover:w-10 hover:bg-sec rounded-full sm:p-1 md:p-2">
                <BiLogoYoutube className="" />
              </div>
              <div className="border  aspect-square flex items-center justify-center hover:w-10 hover:bg-sec rounded-full sm:p-1 md:p-2">
                <BiLogoFacebook />
              </div>
              <div className="border  aspect-square flex items-center justify-center hover:w-10 hover:bg-sec rounded-full sm:p-1 md:p-2">
                <BiLogoInstagram />
              </div>
              <div className="border  aspect-square flex items-center justify-center hover:w-10 hover:bg-sec rounded-full sm:p-1 md:p-2">
                <BiLogoTwitter />
              </div>
            </div>
            <p className="hidden sm:block md:text-base  hover:text-sec hover:underline sm:text-[0.5rem]">
              contact@<span className="text-white">WordSmitters</span>.com
            </p>
          </div>
          <div className="flex justify-between text-base flex-col sm:flex-row gap-8 sm:w-[85%] md:w-1/2 sm:gap-0 text-center sm:text-left">
            <div className="font-[400] text-base sm:text-[10px] flex flex-col gap-4">
              <p className="sm:font-[500] sm:text-[14px] font-[600] text-base mb-2">
                LINKS
              </p>
              <p className="text-base hover:underline hover:text-sec">Home</p>
              <p className="text-base hover:text-sec hover:underline">About</p>
              <p className="text-base hover:text-sec hover:underline">Blog</p>
              <p className="text-base hover:text-sec  hover:underline">Contact Us</p>
              <p className="text-base hover:text-sec  hover:underline">FAQ</p>
            </div>
            <div className="font-[400] text-[14px] sm:text-[10px] flex flex-col gap-4">
              <p className="sm:font-[500] sm:text-[14px] font-[300] text-[12px] mb-2">
                ETHICAL CODES
              </p>
              <p className="text-base hover:text-sec hover:underline">Community Guidelines</p>
              <p className="text-base hover:text-sec hover:underline">Code of conduct</p>
            </div>
            <div className="font-[400] text-base sm:text-[10px] flex flex-col gap-4">
              <p className="sm:font-[500] sm:text-[14px] font-[300] text-base  mb-2">
                RESOURCES
              </p>
              <Link to={"/howitworks"} className="text-base hover:text-sec hover:underline">How it works</Link>
              <Link to={"/guarantee"} className="text-base hover:text-sec hover:underline">Guarantee Page</Link>
            </div>
          </div>
        </div>
        <div className=" bg-sec text-white rounded-e-full  p-6 text-left w-1/4 hidden sm:block">
          <p className=" text-base text-[12px] font-semibold md:font-[700] md:text-[14px]">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <p className=" text-base font-[400] md:text-[10px] w-4/5 md:w-3/4 my-4">
            GET UP-TO-DATE INFORMATION ABOUT <span className="text-pry"> WOORDSMITTERS</span> AND ITS SERVICES
          </p>
          <span
            onClick={openModal}
            className="p-1 md:p-2 text-base rounded-e-2xl rounded-b-2xl text-sec cursor-pointer bg-pry sm:text-[12px]"
          >
            Subscribe
          </span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col sm:items-center sm:flex-row sm:gap-4 text-[#808080] sm:text-white text-[10px]  font-[400] flexWrap">
        <div className="flex justify-center hover:text-sec text-base gap-1 items-center w-full my-6 sm:my-0 text-center sm:w-auto">
          <span className="text-[18px]">&copy;</span>
          <span className="flex hover:underline"> <p className="text-white">WordSmitters</p>, 2024</span>
        </div>
        <div className="flex flex-row gap-4  text-base font-[400] flexWrap justify-center">
          <span className="hover:text-sec hover:underline">PRIVACY POLICY</span>
          <span className="hover:text-sec hover:underline">COOKIE POLICY</span>
          <Link to={"/terms"} className="hover:text-sec">TERMS & CONDITIONS</Link>
        </div>
        <div className="items-center text-[#808080] text-[16px]  flex justify-center gap-6 w-full mt-5 mb-3 sm:hidden">
          <div className="border rounded-full p-2">
            <BiLogoYoutube />
          </div>
          <div className="border rounded-full p-2">
            <BiLogoFacebook />
          </div>
          <div className="border rounded-full p-2">
            <BiLogoInstagram />
          </div>
          <div className="border rounded-full p-2">
            <BiLogoTwitter />
          </div>
        </div>
        <p className=" font-normal text-base text-center text-[#808080] mb-6 sm:hidden">
          contact@topmeangel.com
        </p>
      </div>

      {isModalOpen && (
        <div
          className={`fixed  flex justify-center items-center left-0 z-50 bottom-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.1)]`}
        >
          <div
            className={`${
              isTransitioned ? "pt-0" : "pt-[100vh]"
            } transition-all ease-in-out duration-1000 `}
          >
            <div
              className={`bg-white   text-black inline-flex px-3 text-[10px] rounded-xl py-2 gap-3 flex-col`}
            >
              <p className=" font-semibold self-center text-[12px]">
                SUBSCRIBE TO OUR NEWSLETTER
              </p>
              <p>Please insert your Email address</p>
              <form action="" className="flex flex-col gap-3">
                <div className="w-full border-black border rounded-lg py-3 px-2">
                  <input
                    type="text"
                    placeholder="INPUT EMAIL"
                    className="outline-none text-[8px]"
                  />
                </div>
                <div className="flex text-[9px] gap-2 items-center pl-10">
                  <div className="relative bg-slate-600 rounded-full w-6 h-6">
                    <div className="absolute -left-1/2 bg-red-600 rounded-full w-6 h-6">
                      {" "}
                      <div className="absolute -left-1/2 bg-yellow-600 rounded-full w-6 h-6">
                        <div className="absolute -left-1/2 bg-green-600 rounded-full w-6 h-6">
                          {" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                  <span className=" font-semibold -mr-[6px]">+2,030</span>
                  <span>Subscribers</span>
                </div>
                <div className="flex text-[10px] gap-3 justify-between">
                  <button
                    type="submit"
                    className=" bg-black text-white rounded px-9 "
                  >
                    SUBSCRIBE
                  </button>
                  <button
                    onClick={closeModal}
                    className=" border rounded px-9 py-2 border-black"
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer2;

import React from "react";
import img3 from "../assets/res/top/img3.png";
import img2 from "../assets/res/top/img2.png";
import img1 from "../assets/res/top/img1.png";
import img4 from "../assets/res/top/img4.png";
import img5 from "../assets/res/top/img5.png";
import img6 from "../assets/res/top/img6.png";
import img7 from "../assets/res/top/img7.png";
import Icon from "../assets/res/top/Icon.png";
import Icon1 from "../assets/res/top/Icon1.png";
import Facebook from "../assets/res/top/Facebook.png";
import Instagram from "../assets/res/top/Instagram.png";
import Linkedin from "../assets/res/top/Linkedin.png";
import Vector from "../assets/res/top/Vector.png";
import last from "../assets/res/top/last.png";
import las from "../assets/res/top/las.png";
import { Link } from "react-router-dom";

const TopMe = () => {
  return (
    <div className="flex flex-col w-full justify-center ">
      <div className="flex mx-auto ml-5  rounded w-[95%] text-center justify-center mt-2">
        <img className="flex text-center" src={img3} alt="Img3" />
      </div>
      <div className="flex w-[85%]  mx-auto gap-5 mt-4  ">
        <div className="w-[63vw] ">
          <div className="flex  w-full mb-7 justify-between gap-5">
            <div className="w-[80%] gap-5 flex">
              <div className="flex gap-2 items-center ">
                <img className="flex " src={img1} alt="Img3" />
                <p className="flex">NGOZI NWOSU</p>
              </div>
              <div className="flex  text-[#808080] gap-5 justify-around items-center">
                <p>10 Aug, 2023</p>
                <p className="w-1 h-1 bg-[#808080] rounded">.</p>
                <p>10 MINUTES READ</p>
                <p className="w-1 h-1 bg-[#808080] rounded">.</p>
                <p>12 comments</p>
              </div>
            </div>
            <div className="w-[15%]  justify-end">
              <div className="items-center  bg-black rounded py-1 flex my-3  text-center">
                <p className=" px-4  text-white text-center items-center justify-center">
                  SHARE
                </p>
                <img src={Icon1} alt="" />
              </div>
            </div>
          </div>
          <div className="gap-3 flex flex-col">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna. Sed consequat, leo eget bibendum sodales, augue velit
              cursus nunc.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna. Sed consequat, leo eget bibendum sodales, augue velit
              cursus nunc.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna. Sed consequat, leo eget bibendum sodales, augue velit
              cursus nunc
            </p>
          </div>
          <div>
            <div className="bg-[#F0F0F0] flex flex-col py-10 w-full">
              <p className=" text-4xl font-normal mx-10 mb-1 leading-10">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
              <div className="flex gap-2 item-center mb-3  mx-10  text-justify justify-items-start">
                <div className="w-16 bg-black h-1  text-center my-auto items-center justify-center"></div>
                <p> Ngozi Nwosu</p>
              </div>
            </div>
            <div className="mt-3 mb-5">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                mauris sit amet nibh. Donec sodales sagittis magna. Sed
                consequat, leo eget bibendum sodales, augue velit cursus nunc.
              </p>
            </div>
            <div className="flex gap-3 justify-between ">
              <div className="flex gap-5">
                <p className="m-auto ">POPULAR TAGS</p>
                <div className="flex text-[#808080] gap-3 m-auto">
                  <p className="bg-[#F0F0F0] py-2 px-2">FUND</p>
                  <p className="bg-[#F0F0F0]  py-2 px-2">CHARITY</p>
                  <p className="bg-[#F0F0F0]  py-2 px-2">POVERTY</p>
                </div>
              </div>
              <div className="items-center  bg-black rounded py-1 flex my-3  text-center">
                <p className=" px-5  text-white text-center items-center justify-center">
                  SHARE
                </p>
                <img src={Icon1} alt="" />
              </div>
            </div>
            <div className="flex border-y flex-col gap-5  py-10 mb-10 border-[#808080] mt-10">
              <div className=" flex px-10 gap-5">
                <div>
                  <img src={img7} alt="" />
                </div>
                <div className="flex flex-col">
                  <p>NGOZI NWOSU</p>
                  <p className="text-[#808080]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.{" "}
                  </p>
                  <div className="flex">
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Linkedin} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-10">
                <p className="mb-3">OTHER ARTICLES</p>
                <div className="flex justify-between gap-3">
                  <div className="flex gap-3">
                    <img src={img5} alt="" />
                    <div className="text-[#808080]">
                      <p>Build Seamless Spreadshet Import Experience</p>
                      <p>23 Oct. 2023</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img src={img5} alt="" />
                    <div className="text-[#808080]">
                      <p>Build Seamless Spreadshet Import Experience</p>
                      <p>23 Oct. 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold mb-3">Comments (3)</p>
              <div>
                <div>
                  <div className="flex items-start mb-7  gap-5">
                    <span className=" bg-[#808080] rounded-full aspect-square w-[10%] text-white flex items-center justify-center">
                      JN
                    </span>
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <p>John Nwankwo</p>
                        <p>24 OCT, 2023</p>
                      </div>
                      <div>
                        <p className="text-[#808080] ">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus.
                        </p>
                      </div>
                      <div className="flex text-center items-center gap-5">
                        <p>REPLY</p>
                        <img className="" src={Vector} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="flex ml-16 border-b border-[#808080] mb-7 items-start  gap-5">
                    <span className=" bg-[#9747FF] rounded-full  aspect-square w-[11%] text-white flex items-center justify-center">
                      SO
                    </span>
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <p>Stephen Okonkwo</p>
                        <p>26 OCT, 2023</p>
                      </div>
                      <div>
                        <p className="text-[#808080] ">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus.
                        </p>
                      </div>
                      <div className="flex text-center items-center gap-5">
                        <p>REPLY</p>
                        <img className="" src={Vector} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start mb-14  gap-5">
                    <span className=" bg-[#FF6B6B] rounded-full aspect-square w-[10%] text-white flex items-center justify-center">
                      UF
                    </span>
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <p>Ubong Franklin</p>
                        <p>24 OCT, 2023</p>
                      </div>
                      <div>
                        <p className="text-[#808080] ">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus.
                        </p>
                      </div>
                      <div className="flex text-center items-center gap-5">
                        <p>REPLY</p>
                        <img className="" src={Vector} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-10  flex gap-5 flex-col">
                  <p>LEAVE A COMMENT</p>
                  <div className="">
                    <div className=" flex mb-5 gap-10">
                      <input
                        className="w-[45%] h-[8vh] bg-[#F6F6F6] pl-10  rounded-[8px] border-[#808080] "
                        type="text"
                        name="fullName"
                        value={""}
                        placeholder="INPUT FULL NAME"
                      />
                      <input
                        className="w-[45%] h-[8vh] bg-[#F6F6F6] pl-10  rounded-[8px] border-[#808080] "
                        type="text"
                        name="phonenumber"
                        value={""}
                        placeholder="PHONE NUMBER"
                      />
                    </div>
                    <div>
                      <input
                        className="w-[45%] h-[8vh] bg-[#F6F6F6] pl-10 rounded-[8px] border-[#808080] "
                        type="text"
                        name="email"
                        value={""}
                        placeholder="INPUT YOUR EMAIL"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <textarea
                    className=" border-[#808080] border-solid bg-[#F6F6F6] "
                      type="text"
                      value={""}
                      name="writecomment"
                      placeholder="WRITE COMMENT"
                      cols="30"
                      rows="10"
                    />
                    <Link className="text-white w-10 px-20 py-3 items-center text-center flex justify-center bg-[#43C4B2] rounded-full">
                      POST
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[32vw]  ">
          <div className="w-full bg-black rounded text-white h-[30vh]">
            <p className="flex mb-10 pl-3 pt-5">Search Here</p>
            <div className="flex relative">
              <input
                className="relative border-none mx-5 flex py-4 px-8 rounded-full bg-white"
                type="text"
                placeholder="KEYWORDS"
              />
              <img
                className="absolute right-0 top-0 mt-4 mr-7"
                src={Icon}
                alt=""
              />
            </div>
          </div>
          <div className=" flex flex-col gap-3 mt-5">
            <p className="flex mb-5 border-b border-[#808080]">CATEGORIES</p>
            <div className="flex justify-between">
              <p className=" text-[#808080]">Events</p>
              <p>10</p>
            </div>
            <div className="flex justify-between">
              <p className=" text-[#808080]">Past Events</p>
              <p>3</p>
            </div>
            <div className="flex justify-between">
              <p className=" text-[#808080]">Announcements</p>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <p className=" text-[#808080]">TopMe Guidelines</p>
              <p>4</p>
            </div>
            <div className="flex justify-between">
              <p className=" text-[#808080]">Arts & Culture</p>
              <p>15</p>
            </div>
            <div className="flex justify-between">
              <p className=" text-[#808080]">Stacks</p>
              <p>10</p>
            </div>
            <div className="flex justify-between">
              <p className=" text-[#808080]">Best Practices</p>
              <p>23</p>
            </div>
            <div className="flex justify-between">
              <p className=" text-[#808080]">Campaign Creation</p>
              <p>11</p>
            </div>
          </div>
          <div className="flex mt-10 gap-5 flex-col">
            <p className="flex mb-5 border-b border-[#808080]">RELATED POST</p>
            <div className=" flex gap-5">
              <div className="flex justify-between">
                <img className="flex mr-5" src={img5} alt="" />
                <div className="flex  text-[#808080] flex-col">
                  <p>Build Seamless Spreadsheet Import Experience</p>
                  <p>23 Oct 2023</p>
                </div>
              </div>
            </div>
            <div className=" flex gap-5">
              <div className="flex justify-between">
                <img className="flex mr-5" src={img5} alt="" />
                <div className="flex  text-[#808080] flex-col">
                  <p>Build Seamless Spreadsheet Import Experience</p>
                  <p>23 Oct 2023</p>
                </div>
              </div>
            </div>
            <div className=" flex gap-5">
              <div className="flex justify-between">
                <img className="flex mr-5" src={img5} alt="" />
                <div className="flex  text-[#808080] flex-col">
                  <p>Build Seamless Spreadsheet Import Experience</p>
                  <p>23 Oct 2023</p>
                </div>
              </div>
            </div>
            <div className=" flex gap-5">
              <div className="flex justify-between">
                <img className="flex mr-5" src={img5} alt="" />
                <div className="flex  text-[#808080] flex-col">
                  <p>Build Seamless Spreadsheet Import Experience</p>
                  <p>23 Oct 2023</p>
                </div>
              </div>
            </div>
           
          
          </div>
          <div className="flex my-5">
            <img src={last} alt="" />
          </div>
          <div className="text-white rounded-full py-5 mx-5 gap-3 items-center text-center flex justify-center bg-[#43C4B2] ">
            <Link>BECOME AN ANGEL</Link>
            <img src={las} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMe;

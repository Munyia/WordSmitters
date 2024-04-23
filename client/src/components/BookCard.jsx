import React, { useEffect, useState } from "react";

const BookCard = ({
  title = "Bookcard",
  description = "A Novel",
  coverImage = "",
  author = "Author",
  publisher = "Publisher",
  year = "Year",
  genre = "Genre",
  id = "jksak239k129h9o1",
}) => {
  const [showdescription, setdescription] = useState(false);
  console.log(showdescription);
  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = showdescription ? "hidden" : "auto";
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showdescription]);
  function openDescription() {
    setdescription(true);
  }
  function closeDescription() {
    setdescription(false);
  }
  return (
    <div className=" flex rounded-lg hover:shadow-[0px_0px_30px_1px_rgba(0, 255, 117, 0.30)] bg-gradient-to-br from-[rgb(10,32,8)] via-[rgb(20,64,20)] to-[rgb(10,32,8)] transition-all duration-300 background-image: linear-gradient(163deg, green 0%, blue 100%) ">
      <div
        onClick={openDescription}
        className="flex flex-col text-pry rounded-lg hover:text-white hover:shadow-xl hover:scale-x-[0.99] hover:scale-y-[0.996] scale-100 transition-transform duration-200 overflow-hidden"
      >
        <img className="w-[100%] aspect-square " src={coverImage} alt="" />
        <h1 className=" text-2xl align-middle text-center justify-center ">
          {title}
        </h1>
        <div>
          <p className=" align-middle text-center text-pry justify-center">
            {author}
          </p>
        </div>
      </div>
      {showdescription && (
        <div className="fixed flex justify-center items-center left-0 z-50 bottom-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.4)]">
          <div className="w-1/2 h-1/2 border justify-end text-end">
            <div className="w-full h-full p-4 bg-white overflow-clip">
            <button
              onClick={closeDescription}
              className="border w-[5%] bg-pry text-sec hover:text-red-700 hover:text-2xl py-1 rounded-full text-lg justify-center align-middle text-center"
            >
              X
            </button>
              <div className="flex justify-between items-center h-full">
                <div className="w-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src={coverImage}
                    alt=""
                  />
                </div>
                <div className="w-1/2 justify-start mt[-20] text-start p-4">
                  <h2 className="text-2xl font-bold mb-2">{title}</h2>
                  <p>
                    <span className="font-bold">Author:</span> {author}
                  </p>
                  <p>
                    <span className="font-bold">Publisher:</span> {publisher}
                  </p>
                  <p>
                    <span className="font-bold">Year:</span> {year}
                  </p>
                  <p className="mt-4">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;

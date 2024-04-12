import React, { useEffect, useState } from 'react'


const BookCard = ({
    title= 'Bookcard',
    description ='A Novel',
    PosterURL= '',
    author= 'Author',
    publisher= 'Publisher',
    year= 'Year',
    genre= 'Genre',
    id= "jksak239k129h9o1"
}) => {
  const [showdescription, setdescription] = useState(false)
  console.log(showdescription)
  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = showdescription ? "hidden" : "auto";
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showdescription]);
  function openDescription(){
    setdescription(true)
  }
  function closeDescription(){
    setdescription(false)
  }
  return (
      <div  className=" flex rounded-lg hover:shadow-[0px_0px_30px_1px_rgba(0, 255, 117, 0.30)] bg-gradient-to-br from-[rgb(10,32,8)] via-[rgb(20,64,20)] to-[rgb(10,32,8)] transition-all duration-300 background-image: linear-gradient(163deg, green 0%, blue 100%) ">
        <div onClick={openDescription} className="flex flex-col text-pry rounded-lg hover:text-white hover:shadow-xl hover:scale-x-[0.99] hover:scale-y-[0.996] scale-100 transition-transform duration-200 overflow-hidden">
    <img className='w-[100%] aspect-square ' src={PosterURL} alt="" />
        <h1 className=' text-2xl align-middle text-center justify-center '>{title}</h1>
      <div>
      <p className=' align-middle text-center text-pry justify-center'>{author}</p>
      </div>      
    </div>
    {
      showdescription && <div>
         <div
          className={`fixed  flex justify-center items-center left-0 z-50 bottom-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.4)]`}
        >
            <div className='w-3/5 h-3/4 border hover:text-red-700'>

            <button onClick={closeDescription} className='border w-[20%] bg-pry text-sec py-1 rounded-full text-lg justify-center align-middle text-center'>X</button>
            <p className='border w-[20%] bg-sec text-pry py-1 rounded-full text-lg justify-center align-middle text-center'>Next Chapter</p>
            </div>
        </div>

      </div>
    }
    </div>

 
  )
}

export default BookCard



  
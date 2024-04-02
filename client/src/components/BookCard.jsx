import React from 'react'

const BookCard = ({
    title= 'Bookcard',
    description ='A Novel',
    PosterURL= '',
    author= 'Author',
    publisher= 'Publisher',
    year= 'Year',
    genre= 'Genre',
}) => {
  return (
      <div className="flex rounded-lg hover:shadow-[0px_0px_30px_1px_rgba(0, 255, 117, 0.30)] bg-gradient-to-br from-[rgb(10,32,8)] via-[rgb(20,64,20)] to-[rgb(10,32,8)] transition-all duration-300 background-image: linear-gradient(163deg, green 0%, blue 100%) ">
        <div className="flex flex-col text-pry rounded-lg hover:text-white hover:shadow-xl hover:scale-x-[0.99] hover:scale-y-[0.996] scale-100 transition-transform duration-200 overflow-hidden">
    <img className='w-[100%] aspect-square ' src={PosterURL} alt="" />
        <h1 className=' text-2xl align-middle text-center justify-center '>{title}</h1>
      <div>
      <p className=' align-middle text-center text-pry justify-center'>{author}</p>
      {/* <p className=' align-middle text-center justify-center'>{publisher}</p> */}
      </div>
      {/* <div>
      <p className=' align-middle text-center justify-center'>{genre}</p>
      <p className=' align-middle text-center justify-center'>{year}</p>
      </div> */}
      {/* <p className=' align-middle text-center justify-center'>{description}</p> */}
      
    </div>
    </div>

 
  )
}

export default BookCard



  
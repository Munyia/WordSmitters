import React, { useEffect, useState } from 'react'
import dropdown from '../assets/res/dropdown.gif'
import api from '../utils/api'
import { Link, useParams } from 'react-router-dom'

const BookPage = () => {
    document.title= "Reading"
    const { id } = useParams(); // Move this inside the functional component
    const [bookDetails, setBookDetails]= useState({})
    const [notLoggedIn, setNotLoggedIn]= useState(false)
    const [currentChapter, setCurrentChapter]= useState(1)
    const getBookdetails = async (id) => {
        try {
          const response = await api.get(`api/books/${id}`, {
          });
          setBookDetails(response.data)
          console.log(response);
        } catch (error) {
          console.log(error);
          if (error.response.status === 401) {
            setNotLoggedIn(true)
          }
        } 
      };
      useEffect(() => {
        getBookdetails(id)
    
      },[id])

      const nextChapter = () => {
        setCurrentChapter(currentChapter+1)
      }
      const prevChapter = () => {
        setCurrentChapter(currentChapter-1)
      }

      if(notLoggedIn){
          return (

              <div className='w-full h-screen bg-white top-0 z-50 flex items-baseline overflow-hidden absolute'>
                <p className='text-[red] text-3xl font-bold text-center'>You need to be logged in to view this page</p>
                <Link to={'/login'} className=' cursor-pointer'>Login</Link>
            </div>
        )
            }
  return (
    <div className='flex h-[87vh] gap-5'>
        <div className='flex border flex-col gap-4  items-center text-lg text-sec w-[20%]' >
            
        <div class="group  gap-5 relative text-[rgb(10,32,8)] w-full flex flex-col pr-5 ">
        <img className='w-4 self-end' src={dropdown} alt="" />
  <div className="hidden text-black absolute top-[100%] bg-[#CD9564] rounded  group-hover:flex w-full flex-col gap-2 p-2 text-center">
            {
                bookDetails.chapters && bookDetails.chapters.map((chapter, index)=>(
                    <p onClick={()=>setCurrentChapter(index+1)} key={index} className=' cursor-pointer hover:bg-sec rounded hover:text-white py-2'>Chapter {index+1}</p>
                ))
            }
        </div>
       </div>
            <p className='text-2xl'>{bookDetails && bookDetails.title}</p>

       <div className='flex gap-4 flex-col w-full items-center' >
            <div className='w-[60%] text-pry text-[3rem] flex justify-center items-center aspect-square bg-sec rounded-full overflow-hidden'>
                <img className='w-full rounded-full hover:scale-110'
                  src={bookDetails.coverImage && bookDetails.coverImage} alt="Profile"
                  />
            </div>
            <p className='text-xl'>{bookDetails && bookDetails.authorName}</p> 
            </div>
        </div>
        <div className=' px-10 w-[90%]'>
            <div className='flex flex-col w-[65] gap-5 text-lg my-6 pb-5 h-[80%] no-scrollbar overflow-y-scroll'>
            <p className='text-5xl text-sec font-serif font-bold text-center '>Chapter {currentChapter}</p>
            {bookDetails.chapters && <p>{bookDetails.chapters[currentChapter-1]}</p>}
            {/* <p> <span className='text-2xl text-sec pr-1 font-semibold font-serif'>The</span>sun had barely risen, casting a warm orange glow over the sprawling metropolis of Lagos, Nigeria. The city was already bustling with activity, as vendors set up their stalls and commuters jostled for space on the crowded streets.</p>
            <p>In the midst of all this chaos, a young woman named Ada emerged from the bustling crowd. She was tall and slender, with dark skin and hair pulled back into a neat bun. She wore a simple yellow dress and carried a small suitcase, her eyes scanning the unfamiliar surroundings with a mix of excitement and trepidation.</p>
            <p>Ada had never been to Lagos before. She had grown up in a small village in the countryside, where life was simple and quiet. But she had always dreamed of seeing the big city, with its towering skyscrapers and endless opportunities.</p>
            <p>As she made her way through the crowded streets, Ada couldn't help but feel overwhelmed. She had never seen so many people in one place before, and the noise and chaos was almost too much to bear.</p>
            <p>But she refused to let herself be intimidated. She had come to Lagos to make a new start, to build a better life for herself. And she was determined to succeed, no matter what obstacles lay ahead.</p>
            <p>After what felt like hours of walking, Ada finally arrived at her destination: a small, rundown apartment building in a rundown neighborhood. She hesitated for a moment, wondering if she had made a mistake, but then she squared her shoulders and marched up to the front door.</p>
            <p>She was greeted by a kind-faced woman named Mama Chinwe, who showed her to her new apartment. It was small and cramped, with peeling wallpaper and a leaky faucet, but it was hers.</p>
            <p>As she settled in, Ada couldn't help but feel a sense of excitement. She was finally here, in the heart of Lagos, ready to take on whatever challenges came her way. <br />Little did she know, the real adventure was just beginning.</p>
            <p>Ada spent the rest of the day unpacking her things and exploring her new neighborhood. She wandered the streets, taking in the sights and sounds of the city, and marveling at the sheer diversity of people and cultures.</p>
            <p>She stopped at a small market to buy some food, and was struck by the vibrant colors and smells of the fresh produce. She haggled with the vendors, laughing and joking with them as they tried to sell her their wares.</p>
            <p>As the sun began to set, Ada made her way back to her apartment. She was exhausted but exhilarated, her mind buzzing with all the new experiences she had had.</p>
            <p>But as she approached her building, she noticed something strange. There was a group of men standing outside, smoking and talking in hushed tones. They looked up as she approached, their eyes narrowing.</p>
            <p>Ada felt a chill run down her spine. She quickened her pace, but it was too late. The men moved to block her way, their faces twisted into menacing grins.</p>
            <p>"Where do you think you're going, pretty lady?" one of them sneered. <br />Ada's heart raced as she tried to think of a way to escape. But before she could react, a voice rang out from the shadows.</p> */}
        </div>
        <div className='flex justify-between text-center mt-8 '>
            <div className='w-[15%]'>{
                currentChapter!==1 && <p onClick={prevChapter} className='border  bg-pry text-sec py-1 rounded-full text-sm justify-center align-middle text-center'>Previous Chapter</p>
            }
            </div>
            {
                bookDetails.chapters && currentChapter!==bookDetails.chapters.length && <p onClick={nextChapter} className='border w-[15%] bg-pry text-sec py-1 rounded-full text-sm justify-center align-middle text-center'>Next Chapter</p>
            }
        </div>
        </div>
    </div>
  )
}

export default BookPage
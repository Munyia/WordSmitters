import React from 'react'
import dropdown from '../assets/res/dropdown.gif'

const BookPage = () => {
  return (
    <div className='flex h-[87vh] gap-5'>
        <div className='flex border flex-col gap-4  items-center text-lg text-sec w-[35%]' >
            
        <div class="group  gap-5 relative text-[rgb(10,32,8)] w-full flex flex-col pr-5 ">
        <img className='w-4 self-end' src={dropdown} alt="" />
  <div className="hidden text-black absolute top-[100%] bg-[#CD9564] rounded  group-hover:flex w-full flex-col gap-2 p-2 text-center">
            <p>Chapter 1</p>
            <p>Chapter 2</p>
            <p>Chapter 33</p>
            <p>Chapter 4</p>
            <p>Chapter 5</p>
        </div>
       </div>
            <p className='text-2xl'>Lagos Wahala</p>

       <div className='flex gap-4 flex-col w-full items-center' >
            <div className='w-[60%] text-pry text-[3rem] flex justify-center items-center aspect-square bg-sec rounded-full overflow-hidden'>
                <span className='hover:scale-110'>PR</span>
            </div>
            <p className='text-xl'>Pheecamila Ranjo</p> 
            </div>
        </div>
        <div className=' px-10'>
            <div className='flex flex-col w-[65] gap-5 text-lg my-6 pb-5 h-[80%] no-scrollbar overflow-y-scroll'>
            <p>Chapter 1</p>
            <p>The sun had barely risen, casting a warm orange glow over the sprawling metropolis of Lagos, Nigeria. The city was already bustling with activity, as vendors set up their stalls and commuters jostled for space on the crowded streets.</p>
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
            <p>"Where do you think you're going, pretty lady?" one of them sneered. <br />Ada's heart raced as she tried to think of a way to escape. But before she could react, a voice rang out from the shadows.</p>
        </div>
        <div className='flex justify-between text-center mt-8 '>
            <p className='border w-[20%] bg-pry text-sec py-1 rounded-full text-lg justify-center align-middle text-center'>Previous Chapter</p>
            <p className='border w-[20%] bg-pry text-sec py-1 rounded-full text-lg justify-center align-middle text-center'>Next Chapter</p>
        </div>
        </div>
    </div>
  )
}

export default BookPage
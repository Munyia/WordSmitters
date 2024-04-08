import React from 'react'
import llogo from '../assets/res/log.png'
import { Link } from 'react-router-dom'


const HowItWorks = () => {
  return (
    <div  className='flex font-medium text-lg leading-loose tracking-wide  p-5 flex-col px-15 bg-gradient-to-br from-[rgb(11,31,10)] via-[rgb(7,49,3)] to-[rgb(6,49,6)]  text-white align-middle   '>
          <div className='flex pt-2  text-3xl align-middle justify-between text-center'>
        <div className='w-[20%] '>
        <Link to={'/'}><img src={llogo} className='h-[15vh]  ' alt="" /></Link>
        </div>
        <div className='w-[70%] '>
        <p className='w-[50%] justify-center'> How <span className='text-pry '> WordSmitters</span> Works</p>
        </div>
       </div>
       <div>
        <p className='flex justify-center p-3 text-2xl text-center'>Welcome to <span className='text-pry '> WordSmitters</span>, your go-to platform for exploring Nigerian books and literature. Here's how <span className='text-pry '> WordSmitters</span> works:</p>
       </div>
       <div className='flex text-lg gap-5 flex-col'>
        <p className=' flex text-2xl' >Ghostwriting Services</p>
        <p className=''>1. In addition to providing a platform for exploring Nigerian books and literature, <span className='text-pry '> WordSmitters</span>also offers professional ghostwriting services. Our team of experienced writers specializes in crafting high-quality written content tailored to your specifications. </p>
        <p>2. Discover Nigerian Books: <span className='text-pry '> WordSmitters</span>is your gateway to discovering a diverse collection of Nigerian books spanning various genres, including fiction, non-fiction, poetry, drama, and more. Dive into our extensive library to explore captivating stories, insightful essays, and thought-provoking poetry penned by Nigerian authors.</p>
        <p>3. Browse by Genre and Author: Easily navigate through our curated collection of Nigerian literature by browsing books based on genre or author. Whether you're a fan of mystery novels, historical fiction, or contemporary poetry, <span className='text-pry '> WordSmitters</span> offers a seamless browsing experience to help you find your next favorite read.</p>
        <p>4. Personalized Recommendations: Not sure where to start? Let <span className='text-pry '> WordSmitters</span> provide personalized book recommendations tailored to your interests and reading preferences. Simply tell us what genres you enjoy or which authors you admire, and we'll curate a list of recommended books just for you.</p>
        <p>5. Book Details and Reviews: Get detailed insights into each book, including plot summaries, author biographies, reader reviews, and ratings. Make informed decisions about your reading selections by exploring the rich metadata and community feedback associated with each title.</p>
        <p>6. Create Reading Lists: Build custom reading lists to organize your literary journey and keep track of books you want to read, have read, or are currently reading. With<span className='text-pry '> WordSmitters</span>, you can curate your own virtual bookshelf and share your reading recommendations with friends and fellow book enthusiasts.</p>
        <p>7. Engage with the Community: Join a vibrant community of book lovers and literary enthusiasts on <span className='text-pry '> WordSmitters</span>. Connect with fellow readers, participate in book discussions, share your thoughts on recent reads, and discover new perspectives from diverse voices within our community.</p>
        <p>8. Stay Updated: Stay informed about the latest additions to our book collection, upcoming author events, literary festivals, and other relevant news and updates from the Nigerian literary scene. Follow our blog, subscribe to our newsletter, or connect with us on social media to stay in the loop.</p>
        <p>9. Support Nigerian Authors: <span className='text-pry '> WordSmitters</span> is dedicated to promoting Nigerian literature and supporting local authors. By using our platform, you're not only enriching your own reading experience but also contributing to the growth and recognition of Nigerian literary talent.</p>
       </div>
    </div>
  )
}

export default HowItWorks
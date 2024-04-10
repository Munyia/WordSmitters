import React from 'react'
import llogo from '../assets/res/log.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div  className='flex font-medium text-lg leading-loose tracking-wide  py-5 flex-col px-[12.5%] bg-gradient-to-br from-[rgb(11,31,10)] via-[rgb(7,49,3)] to-[rgb(6,49,6)]  text-white align-middle   '>
    <div className='flex pt-2  text-3xl align-middle justify-between text-center'>
  
  <p className='w-full text-center mb-10'> About<span className='text-pry '> WordSmitters</span></p>
  
 </div>
        <div className='flex justify-center pb-4 align-middle text-center'> 
        <p >Welcome to <span className='text-pry '> WordSmitters</span>, your premier destination for exploring the vibrant world of Nigerian literature. Founded with a passion for promoting Nigerian authors and showcasing the rich tapestry of Nigerian culture through literature,<span className='text-pry '> WordSmitters</span> aims to be the bridge that connects readers with captivating stories, insightful narratives, and diverse voices from Nigeria.</p>
        </div>
    
      <div className=' flex text-lg  gap-5 flex-col'>
      <div>
        <p className='flex text-2xl justify-center  pb-2  text-center '>Our Mission</p>
        <p>At <span className='text-pry '> WordSmitters</span>, our mission is deeply rooted in our commitment to:</p>
          <p>1. Promote Nigerian Literature: We are dedicated to shining a spotlight on Nigerian literature, elevating the voices of talented Nigerian authors, and fostering a greater appreciation for the literary treasures that Nigeria has to offer.</p>
          <p>2. Empower Nigerian Authors: We provide a platform for Nigerian authors to share their stories with the world, empowering them to reach a wider audience and enriching the global literary landscape with their unique perspectives and experiences.</p>
          <p>3. Celebrate Nigerian Culture: Through the pages of our books, readers can embark on a journey through the vibrant tapestry of Nigerian culture, exploring its rich history, traditions, and contemporary life.</p>
      </div>
      <div className='text-lg '>
        <p className='flex text-2xl justify-center  pb-2  text-center '>What We Offer</p>
        <p>1. Extensive Book Collection: Dive into our extensive collection of Nigerian books, spanning a diverse range of genres including fiction, non-fiction, poetry, memoirs, and more. Whether you're a fan of gripping thrillers, thought-provoking literary fiction, or insightful memoirs, you'll find something to captivate your imagination on <span className='text-pry '> WordSmitters</span>.</p>
        <p>2. Author Spotlights: Get to know the talented authors behind the stories. Our author spotlights offer readers an opportunity to learn more about their favorite writers, their inspirations, and their literary journeys. Discover new authors, explore their works, and gain insights into the creative process.</p>
<p>3. Community Engagement:
Join a vibrant community of readers and writers who share your passion for Nigerian literature. Connect with fellow book enthusiasts, participate in lively discussions, and exchange recommendations for your next great read. Our community forums provide a welcoming space for readers to engage with each other and celebrate their love for Nigerian books.</p>
<p>4. Book Recommendations:
Let us be your guide on your literary journey. Our personalized book recommendation feature helps you discover new titles that match your interests and preferences. Whether you're looking for a heartwarming romance, a gripping mystery, or a powerful work of social commentary, we'll help you find the perfect book to suit your tastes.</p>
</div>
     <div className='text-lg'>
      <p className='flex text-2xl justify-center  pb-2  text-center '>Get Involved</p>
      <p>1. Explore:
Dive into our collection of Nigerian books and embark on a literary adventure. From classic works of Nigerian literature to contemporary bestsellers, there's something for everyone to enjoy.</p>
<p>2. Connect: Join the conversation in our community forums and connect with fellow readers, writers, and literature enthusiasts. Share your thoughts on your favorite books, participate in book clubs, and engage in lively discussions about all things literary.</p>
<p>3. Share: Spread the word about <span className='text-pry '> WordSmitters</span> and help us promote Nigerian literature to readers around the world. Share your favorite books on social media, recommend titles to friends and family, and help us build a community of readers who share our passion for Nigerian books.</p>
     </div>
<div className='text-lg'>
  <p className='flex text-2xl justify-center  pb-2  text-center '>Contact Us</p>
  <p>Have questions or feedback? We'd love to hear from you! Reach out to us at contact@<span className='text-pry '> WordSmitters</span>.com and our team will be happy to assist you.</p>
</div>
<div className='text-lg'>
<p className='flex text-2xl justify-center  pb-2  text-center '>Connect With Us</p>
<p>Stay updated on the latest news and releases from <span className='text-pry '> WordSmitters</span>:</p>
<ul>
  <li>Follow us on Twitter for real-time updates and literary insights.</li>
  <li>Like us on Facebook to join our community and engage with fellow readers.</li>
  <li>Join our Community for exclusive updates, author interviews, and behind-the-scenes content.</li>
</ul>
</div>
      <div className='text-lg'>
        <p className='flex text-2xl justify-center  pb-2  text-center '>About the Team</p>
        <p>Meet the passionate team behind <span className='text-pry '> WordSmitters</span>:</p>
        <ul>
          <li> Laurel Ranjo - Head of Content: With a background in publishing and a deep love for storytelling, Laurel oversees the curation of our book collection and content strategy.</li>
          <li>Stephanie Ranjo - Community Manager: Stephanie is passionate about fostering a sense of community among our readers and authors, ensuring that <span className='text-pry '> WordSmitters</span>remains a welcoming space for all literature enthusiasts.</li>
        </ul>
      </div>
      <div className='text-lg'>
        <p>Join the <span className='text-pry '> WordSmitters</span>Community</p>
        <p>Join our growing community of readers, writers, and literature enthusiasts and explore the rich world of Nigerian literature with <span className='text-pry '> WordSmitters</span>.</p>
      </div>
      </div>

    </div>
  )
}

export default About
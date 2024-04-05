import React from 'react'
import llogo from '../assets/res/log.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div  className='flex p-5 flex-col px-15 bg-sec text-white align-middle   '>
      <div>
        <div className=' flex  pb-4 text-3xl align-middle justify-center text-center '> 
        <div className='w-[20%] justify-center'>
        <Link to={'/'}><img src={llogo} className='h-[15vh]  ' alt="" /></Link>
        </div>
        <div className='w-[70%] justify-center right-7'>
        <p className='w-[50%] justify-center'> About <span className='text-pry '> Wordsmitters</span></p>
        </div>
        </div>
        <p className='flex justify-center pb-3 align-middle text-center'>Welcome to Wordsmitters, your premier destination for exploring the vibrant world of Nigerian literature. Founded with a passion for promoting Nigerian authors and showcasing the rich tapestry of Nigerian culture through literature, Wordsmitters aims to be the bridge that connects readers with captivating stories, insightful narratives, and diverse voices from Nigeria.</p>
      </div>
      <div>
        <p className='flex text-2xl justify-center pb-2  text-center '>Our Mission</p>
        <p>At Wordsmitters, our mission is deeply rooted in our commitment to:</p>
          <p>1. Promote Nigerian Literature: We are dedicated to shining a spotlight on Nigerian literature, elevating the voices of talented Nigerian authors, and fostering a greater appreciation for the literary treasures that Nigeria has to offer.</p>
          <p>2. Empower Nigerian Authors: We provide a platform for Nigerian authors to share their stories with the world, empowering them to reach a wider audience and enriching the global literary landscape with their unique perspectives and experiences.</p>
          <p>3. Celebrate Nigerian Culture: Through the pages of our books, readers can embark on a journey through the vibrant tapestry of Nigerian culture, exploring its rich history, traditions, and contemporary life.</p>
      </div>
      <div>
        <p>What We Offer</p>
        <p>1. Extensive Book Collection: Dive into our extensive collection of Nigerian books, spanning a diverse range of genres including fiction, non-fiction, poetry, memoirs, and more. Whether you're a fan of gripping thrillers, thought-provoking literary fiction, or insightful memoirs, you'll find something to captivate your imagination on Wordsmitters.</p>
        <p>2. Author Spotlights: Get to know the talented authors behind the stories. Our author spotlights offer readers an opportunity to learn more about their favorite writers, their inspirations, and their literary journeys. Discover new authors, explore their works, and gain insights into the creative process.</p>
<p>3. Community Engagement:
Join a vibrant community of readers and writers who share your passion for Nigerian literature. Connect with fellow book enthusiasts, participate in lively discussions, and exchange recommendations for your next great read. Our community forums provide a welcoming space for readers to engage with each other and celebrate their love for Nigerian books.</p>
<p>4. Book Recommendations:
Let us be your guide on your literary journey. Our personalized book recommendation feature helps you discover new titles that match your interests and preferences. Whether you're looking for a heartwarming romance, a gripping mystery, or a powerful work of social commentary, we'll help you find the perfect book to suit your tastes.</p>
     <div>
      <p>Get Involved</p>
      <p>1. Explore:
Dive into our collection of Nigerian books and embark on a literary adventure. From classic works of Nigerian literature to contemporary bestsellers, there's something for everyone to enjoy.</p>
<p>2. Connect: Join the conversation in our community forums and connect with fellow readers, writers, and literature enthusiasts. Share your thoughts on your favorite books, participate in book clubs, and engage in lively discussions about all things literary.</p>
<p>3. Share: Spread the word about Wordsmitters and help us promote Nigerian literature to readers around the world. Share your favorite books on social media, recommend titles to friends and family, and help us build a community of readers who share our passion for Nigerian books.</p>
     </div>
<div>
  <p>Contact Us</p>
  <p>Have questions or feedback? We'd love to hear from you! Reach out to us at contact@wordsmitters.com and our team will be happy to assist you.</p>
</div>
<div>
<p>Connect With Us</p>
<p>Stay updated on the latest news and releases from Wordsmitters:</p>
<ul>
  <li>Follow us on Twitter for real-time updates and literary insights.</li>
  <li>Like us on Facebook to join our community and engage with fellow readers.</li>
  <li>Join our Community for exclusive updates, author interviews, and behind-the-scenes content.</li>
</ul>
</div>
      </div>
      <div>
        <p>About the Team</p>
        <p>Meet the passionate team behind Wordsmitters:</p>
        <ul>
          <li> Laurel Ranjo - Head of Content: With a background in publishing and a deep love for storytelling, Jane oversees the curation of our book collection and content strategy.</li>
          <li>Stephanie Ranjo - Community Manager: Stephanie is passionate about fostering a sense of community among our readers and authors, ensuring that Wordsmitters remains a welcoming space for all literature enthusiasts.</li>
        </ul>
      </div>
      <div>
        <p>Join the Wordsmitters Community</p>
        <p>Join our growing community of readers, writers, and literature enthusiasts and explore the rich world of Nigerian literature with Wordsmitters.</p>
      </div>

    </div>
  )
}

export default About
import React from 'react'
import Project1 from './assets/images1.jpeg'
import Project2 from './assets/images2.jpg'
import Project3 from './assets/New-Project-7.webp'
import Project4 from './assets/image4.jpeg'
import Project5 from './assets/images5.jpeg'
import Project6 from './assets/images6.jpeg'


export const Projects = () => {
  return (
     <section  className="section Projects p-5" id="projects">
    <h2 id='Project-head' className='text-center'>My Projects</h2>
    <div className="pro-con">
      <div className="pro-pic"><img src={Project1} alt="Projects" /><p>Restaurant Website</p></div>
      <div className="pro-pic"><img src={Project2} alt="Projects" /><p>E-Commerce Website</p></div>
      <div className="pro-pic"><img src={Project3}alt="Projects" /><p>Portfolio Website</p></div>
      <div className="pro-pic"><img src={Project4} alt="Projects" /><p>Social Media Website</p></div>
      <div className="pro-pic"><img src={Project5} alt="Projects" /><p>Car Service Website</p></div>
      <div className="pro-pic"><img src={Project6} alt="Projects" /><p>Movie Review Website</p></div>
    </div>
  </section>
  )
}

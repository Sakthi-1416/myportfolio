import React from 'react'
import Project1 from './assets/image2'

export const Projects = () => {
  return (
     <section  className="section Projects p-5" id="projects">
    <h2 id='Project-head' className='text-center'>My Projects</h2>
    <div className="pro-con">
      <div className="pro-pic"><img src={Project1} alt="Projects" /><p>Restaurant Website</p></div>
      <div className="pro-pic"><img src="assests/images2.jpg" alt="Projects" /><p>E-Commerce Website</p></div>
      <div className="pro-pic"><img src="assests/New-Project-7.webp" alt="Projects" /><p>Portfolio Website</p></div>
      <div className="pro-pic"><img src="assests/image4.jpeg" alt="Projects" /><p>Social Media Website</p></div>
      <div className="pro-pic"><img src="assests/images5.jpeg" alt="Projects" /><p>Car Service Website</p></div>
      <div className="pro-pic"><img src="assests/images6.jpeg" alt="Projects" /><p>Movie Review Website</p></div>
    </div>
  </section>
  )
}

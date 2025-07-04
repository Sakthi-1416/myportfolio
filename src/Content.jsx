import React from 'react'
import ProfileImage from './assets/profile.png'
export const Content = () => {
  return (
     <div className='Content-cont d-flex' id='home'>
        <div className='shape2 d-flex  align-items-center justify-content-center'>
            <div className="content-txt">
                <h1>Hello I'm <span className="H-text">Sakthi</span></h1>
                <h2>I'm a <br/>Front End Developer</h2>
                <button className='btn btn-primary p-2 mt-3'>Get My CV</button>
            </div>
        </div>
        <div className='shape1 d-flex  align-items-center justify-content-center'>
            <div>
        <img src={ProfileImage} id='profile-img' loading='lazy' className="img-fluid" alt="..."></img>
        </div>
        </div>
    </div>
  )
}

import React from 'react'

export const Header = () => {
  return (
    <nav id='nav-main' className="navbar  bg-dark navbar-dark text-light container-fluid navbar-expand-lg p-2 ">
  <div className="container-fluid">
    <a className="navbar-brand " id='Header-text' href="#">Portfolio Website</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Skillid">Skills</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link " href="#projects" >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

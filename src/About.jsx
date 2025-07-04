import React from 'react'

export const About = () => {
  return (
   <div
      className="py-5 text-white animate__animated animate__fadeIn"
      style={{
        background: 'linear-gradient(to right, #1e3c72,rgb(132 46 118))',
       
      }}
    >
      <div className="container">
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>
          <span style={{ color: '#ffc107' }}>About</span> Me
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div
              className="p-4 rounded shadow"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <p className="lead">
                Hi, I'm <strong style={{ color: '#0dcaf0' }}>Sakthi</strong> — a
                passionate frontend developer with experience in building modern
                web applications using:
              </p>

              <ul className="list-unstyled ms-3">
                <li>✔️ <span style={{ color: '#f8d210' }}>HTML</span> & <span style={{ color: '#e34c26' }}>CSS</span></li>
                <li>✔️ <span style={{ color: '#7952b3' }}>Bootstrap</span> for responsive design</li>
                <li>✔️ <span style={{ color: '#f7df1e' }}>JavaScript</span> to make websites interactive</li>
                <li>✔️ <span style={{ color: '#61dafb' }}>React</span> for building fast, dynamic UIs</li>
              </ul>

              <p className="mt-4">
                I'm always learning new things and love turning ideas into beautiful, functional websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


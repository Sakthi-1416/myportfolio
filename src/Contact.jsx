import React from 'react'
export const Contact = () => {
  return (
    <section className="Contact m-3 section" id="contact">
    <form className="contact-form">
      <h2 className='text-center'>Get in Touch</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="Email">Email ID</label>
      <input type="email" id="Email" />
      <label htmlFor="Phone">Phone No</label>
      <input type="text" id="Phone" />
      <label htmlFor="Feedback">Give Your Feedback</label>
      <textarea name="Feedback" id="Feedback"></textarea>
      <button>Submit</button>
      <div className="sm">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-whatsapp"></i>
      </div>
    </form>
  </section>
  )
}

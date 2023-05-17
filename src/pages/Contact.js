import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
      <>
      <h2>Contact Me</h2>
      <a href="#">Telephone: +44 07961027111</a>
      </>
      <h4>Email Address</h4>
      <>
      <a href="mailto:ositanduka@ymail.com">ositanduka@ymail.com</a>
      </>
      <h4>GitHub URL</h4>
      <>
      <a href="https://github.com/OsitaNduka">GitHub.com/OsitaNduka</a>
      </>
      <>
      <h4>LinkedIn</h4>
      <a href="https://www.linkedin.com/in/osita-nduka-18820b14/">LinkedIn</a>
      </>
      <h4>Spotify</h4>
      <>
      <a href="#">Spotify</a>
      </>
      <div className='form'>
        <h1>Contact <span>Here</span></h1>
        <input type="text" name='name' id="" placeholder='Enter Name'/>
        <input type="email" name='email' id="" placeholder='Enter email'/>
        <input type="phone" name='phone' id="" placeholder='+44'/>
        <textarea name="message" id="" cols="30" rows="10" />
        <button type="submit">send</button>
      </div>
    </div>

    
  )
}

export default Contact;
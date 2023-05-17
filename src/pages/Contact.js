import React from 'react'
import "../styles/Contact.css"
import { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({name: "", email:"", phone: "", message: ""});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       console.log(data);
    }
  return (
      <form method='post' onSubmit={handleSubmit}>
        <h1>Contact <span>Me</span></h1>
        <input type="text" name='name' id=""onChange={handleChange} value={data.name} placeholder='Enter Name'/>
        <input type="email" name='email' id=""onChange={handleChange} value={data.email} placeholder='Enter email'/>
        <input type="phone" name='phone' id=""onChange={handleChange} value={data.phone} placeholder='+44'/>
        <textarea name="message" id="" cols="30" rows="10"onChange={handleChange} value={data.message} placeholder='Type here...'/>
        <button type="submit">send</button>
        <p>{data.name} {data.email} {data.message} </p>
      </form>
  

    
  )
}

export default Contact;
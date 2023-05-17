import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from '@mui/icons-material';
import "../styles/Footer.css";



function Footer() {
  return (
    <div className='footer'>
    <div> 
     <GitHub /> 
     <a href="https://github.com/OsitaNduka">GitHub.com/OsitaNduka</a>
     <LinkedInIcon />
     <a href="https://www.linkedin.com/in/osita-nduka-18820b14/">LinkedIn</a>
     <FacebookIcon />  
    </div>
    <p> &copy; 2023 ositanduka.com</p>
      <>
      <a href="#">Telephone: +44 07961027111</a>
      </>
      <>
      <a href="mailto:ositanduka@ymail.com">Email: ositanduka@ymail.com</a>
      </>
      
    </div>
  )
}

export default Footer
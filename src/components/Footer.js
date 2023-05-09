import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from '@mui/icons-material';



function Footer() {
  return (
    <div className='footer'>
    <div> 
     <GitHub /> 
     <LinkedInIcon />
     <FacebookIcon />  
    </div>
    <p> &copy; 2023 ositanduka.com</p>
    </div>
  )
}

export default Footer
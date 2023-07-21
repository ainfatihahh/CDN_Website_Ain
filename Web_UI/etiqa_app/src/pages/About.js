import React from 'react'
import BannerImage from "../assets/office.jpeg";
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}></div>
        <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>          
                    Freelance developers typically offer services such as creating 
          software with programming languages, designing websites, managing
           complex data, and ensuring a website is compatible with different 
           browsers and devices. A freelance developer works with clients, businesses, 
           or organizations on a contract or project basis to make apps or websites, test 
           them, and put them online. A freelance web developer builds websites and web applications. 
           There are many “types” of web developers, such as frontend and backend developers, full 
           stack developers, and Salesforce developers. Freelance programmers also work under different
            terms and conditions. Some charge hourly or daily rates; others charge on a project basis; and others 
            run agencies individually or as a team. </p>
          </div>
      
    </div>
  )
}

export default About;

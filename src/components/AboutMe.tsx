import React from 'react'
import ContentHeader from './ContentHeader';
import MessageBar from './MessageBar';
import WelcomeChannel from './WelcomeChannel';
import '../styles/AboutMe.css'

interface nameInterface {
    name: string
}

const AboutMe: React.FC<nameInterface> = ({ name }) => {
    return (
      <div className='RoutesWrapper'>
        <ContentHeader name={name}/>
        <div className='ContentWrapper'>
          <WelcomeChannel message={name}/>
          <div className='FirstMessageWrapper'>
            <img src="assets/profilepic.png" alt="" className="FirstMsgPfp"/>
            <div className='FirstMessageBody'>
                <p className='Username'>Jared</p>
                <p className='MsgBody'>Here's a few things about me.</p>
                <p className='MsgBody'>Personal Info:</p>
                <ul>
                  <li className='MsgBody'>Name: Jared Schulz</li>
                  <li className='MsgBody'>Age: 19</li>
                  <li className='MsgBody'>Degree: Computer Science</li>
                  <li className='MsgBody'>Hometown: Cebu, Philippines</li>
                  <li className='MsgBody'>Interests(CS Related): Data Engineering, Web Development, Backend Programming</li>
                </ul>
                <p className='MsgBody'>Relevant Skills:</p>
                <ul>
                <li className='MsgBody'>Programming Languages: C, JavaScript, Python, TypeScript, SQL, Java (kinda)</li>
                <li className='MsgBody'>Frameworks: React, Node, Spring Boot (kinda)</li>
                <li className='MsgBody'>Other Tools: Git, Vercel, Figma</li>
                </ul>
                <p className='MsgBody'>Links:</p>
                <div className='Links'>
                  <a href="https://github.com/Plebbaroni" target='_blank'><img src="assets/25231.png" alt="" className='AboutMeLink'/></a>
                  <a href="https://open.spotify.com/user/3am5c3qi207liqjscfhezprdm" target='_blank'><img src="assets/spotify.png" alt="" className='AboutMeLink'/></a>
                </div>
              </div>
          </div>
        </div>
        <MessageBar/>
      </div>
    );
  };
  

export default AboutMe
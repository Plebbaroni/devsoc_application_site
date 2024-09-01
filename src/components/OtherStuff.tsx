import React from 'react'
import ContentHeader from './ContentHeader';
import MessageBar from './MessageBar';
import WelcomeChannel from './WelcomeChannel';
import "../styles/FirstMessage.css"
interface nameInterface {
    name: string
}

const OtherStuff: React.FC<nameInterface> = ({ name }) => {
    return (
      <div className='RoutesWrapper'>
        <ContentHeader name={name}/>
        <div className='ContentWrapper'>
          <WelcomeChannel message={name}/>
          <div className='FirstMessageWrapper'>
            <img src="/assets/profilepic.png" alt="" className="FirstMsgPfp"/>
            <div className='FirstMessageBody'>
                <p className='Username'>Jared</p>
                <p className='MsgBody'>Here's a couple more things about me:</p>
                <ul>
                  <li className='MsgBody'>Although I don't really play sports, I am a fan of basketball, F1, and professional wrestling.(I also watch baseball highlights but am not familiar with any teams or players)</li>
                  <li className='MsgBody'>Some hobbies I have are fishing, birdwatching, and cooking.</li>
                  <li className='MsgBody'>I also enjoy going bowling, go-karting, watching movies, and reading manga/comics.</li>
                  <li className='MsgBody'>My favorite food is Unagi. Here's a picture I took of it:</li>
                </ul>
                <img src="/assets/unagi.jpeg" alt="" className='unagi'/>
              </div>
          </div>
        </div>
        <MessageBar/>
      </div>
    );
  };
  

export default OtherStuff
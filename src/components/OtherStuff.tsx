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
            <img src="../src/assets/profilepic.png" alt="" className="FirstMsgPfp"/>
            <div className='FirstMessageBody'>
                <p className='Username'>Jared</p>
                <p className='MsgBody'>Here's a couple more things about me:</p>
              </div>
          </div>
        </div>
        <MessageBar/>
      </div>
    );
  };
  

export default OtherStuff
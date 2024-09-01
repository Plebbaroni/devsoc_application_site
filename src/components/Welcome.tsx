import React from 'react'
import ContentHeader from './ContentHeader';
import MessageBar from './MessageBar';
import WelcomeChannel from './WelcomeChannel';

interface nameInterface {
    name: string
}

const Welcome: React.FC<nameInterface> = ({ name }) => {
    return (
      <div className='RoutesWrapper'>
        <ContentHeader name={name}/>
        <div className='ContentWrapper'>
          <WelcomeChannel message={name}/>
          <div className='FirstMessageWrapper'>
            <img src="../src/assets/profilepic.png" alt="" className="FirstMsgPfp"/>
            <div className='FirstMessageBody'>
                <p className='Username'>Jared</p>
                <p className='MsgBody'>Hello, my name is Jared. Welcome to my website! :D</p>
                <p className='MsgBody'>With this site I've tried to copy the discord UI, I just couldn't resist the pun AHAHA</p>
                <p className='MsgBody'>I've set up a couple "text channels" here where you can learn more about me! Check them out!</p>
              </div>
          </div>
        </div>
        <MessageBar/>
      </div>
    );
  };
  

export default Welcome
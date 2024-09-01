import React from 'react'
import ContentHeader from './ContentHeader';
import MessageBar from './MessageBar';
import WelcomeChannel from './WelcomeChannel';


interface nameInterface {
    name: string
}

const Music: React.FC<nameInterface> = ({ name }) => {
    return (
      <div className='RoutesWrapper'>
        <ContentHeader name={name}/>
        <div className='ContentWrapper'>
          <WelcomeChannel message={name}/>
          <div className='FirstMessageWrapper'>
            <img src="assets/profilepic.png" alt="" className="FirstMsgPfp"/>
            <div className='FirstMessageBody'>
                <p className='Username'>Jared</p>
                <p className='MsgBody'>I see I've neglected the harmony part of the theme a bit, so let's talk about music!</p>
                <p className='MsgBody'>Music is the hobby I enjoy the most, both in terms of playing instruments and listening to songs.</p>
                <p className='MsgBody'>As far as instruments go, I play the bass guitar and a bit of electric guitar. I've also recently purchased a MIDI controller, so hopefully I can make something cool to show soon.</p>
                <p className='MsgBody'>Here's what I've been listening to lately:</p>
                <img src="assets/chart.png" alt="" className='chart'/>
              </div>
          </div>
        </div>
        <MessageBar/>
      </div>
    );
  };
  

export default Music
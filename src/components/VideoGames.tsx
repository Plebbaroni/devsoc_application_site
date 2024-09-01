import React from 'react'
import ContentHeader from './ContentHeader';
import MessageBar from './MessageBar';
import WelcomeChannel from './WelcomeChannel';


interface nameInterface {
    name: string
}

const VideoGames: React.FC<nameInterface> = ({ name }) => {
    return (
      <div className='RoutesWrapper'>
        <ContentHeader name={name}/>
        <div className='ContentWrapper'>
            <WelcomeChannel message={name}/>
            <div className='FirstMessageWrapper'>
            <img src="../src/assets/profilepic.png" alt="" className="FirstMsgPfp"/>
            <div className='FirstMessageBody'>
                <p className='Username'>Jared</p>
                <p className='MsgBody'>Although I don't play anymore due to being away from home, I enjoy playing video games.</p>
                <p className='MsgBody'>I had over 1000 hours in CSGO, GTA Online, and Brawlhalla. I also played a bunch of R6, Minecraft, and Rimworld.</p>
                <p className='MsgBody'>Brawlhalla Highlight:</p>
                <img src="../src/assets/brawlhalla.gif" alt="" className='brawlgif'/>
              </div>
          </div>
        </div>
        <MessageBar/>
      </div>
    );
  };
  

export default VideoGames
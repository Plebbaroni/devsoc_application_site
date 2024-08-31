import React from 'react'
import ContentHeader from './ContentHeader';
import MessageBar from './MessageBar';
interface nameInterface {
    name: string
}

const OtherStuff: React.FC<nameInterface> = ({ name }) => {
    return (
      <div className='RoutesWrapper'>
        <ContentHeader name={name}/>
        <div className='ContentWrapper'>

        </div>
        <MessageBar/>
      </div>
    );
  };
  

export default OtherStuff
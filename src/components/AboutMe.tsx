import React from 'react'
import ContentHeader from './ContentHeader';

interface nameInterface {
    name: string
}

const AboutMe: React.FC<nameInterface> = ({ name }) => {
    return (
      <div className='RoutesWrapper'>
        <ContentHeader name={name}/>
      </div>
    );
  };
  

export default AboutMe
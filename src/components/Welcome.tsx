import React from 'react'
import ContentHeader from './ContentHeader';

interface nameInterface {
    name: string
}

const Welcome: React.FC<nameInterface> = ({ name }) => {
    return (
      <div>
        <ContentHeader name={name}/>
      </div>
    );
  };
  

export default Welcome
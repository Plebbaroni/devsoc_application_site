import React from 'react'

interface nameInterface {
    name: string
}

const ContentHeader: React.FC<nameInterface> = ({ name }) => {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  };
  

export default ContentHeader
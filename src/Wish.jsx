import React from 'react';
import img from './download.png'
const Wish = ({ name }) => {
  return (
    <div className='wish-message'>
      HAPPY BIRTHDAY <span className='highlight'>{name.toUpperCase()}</span> !!!
    </div>
  );
};

export default Wish;

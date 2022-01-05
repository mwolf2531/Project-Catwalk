import React from 'react';
import ReactDOM from 'react-dom';


const MoreAnswers = ({ rendering }) => {

  return (
    <>
      <button className='more-questions-button' onClick={rendering}>MORE ANSWERED QUESTIONS</button>
    </>
  )
}


export default MoreAnswers;
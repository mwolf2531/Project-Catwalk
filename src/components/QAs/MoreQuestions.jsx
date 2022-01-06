import React from 'react';
import ReactDOM from 'react-dom';


const MoreQuestions = ({ rendering }) => {

  return (
    <>
      <button className='more-questions-button' onClick={rendering}>MORE ANSWERED QUESTIONS</button>
    </>
  )
}


export default MoreQuestions;
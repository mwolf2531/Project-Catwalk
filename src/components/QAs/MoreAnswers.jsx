import React from 'react';
import ReactDOM from 'react-dom';


const MoreAnswers = ({ moreAnswerRender }) => {

  return (
    <>
      <button className='more-questions-button' onClick={moreAnswerRender}>LOAD MORE ANSWERS</button>
    </>
  )
}


export default MoreAnswers;
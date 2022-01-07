import React from 'react';
import ReactDOM from 'react-dom';


const MoreAnswers = ({ moreAnswerRender }) => {

  return (
    <div>
      <button className='more-questions-button' onClick={moreAnswerRender}>LOAD MORE ANSWERS</button>
    </div>
  )
}


export default MoreAnswers;
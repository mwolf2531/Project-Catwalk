import React from 'react';
import ReactDOM from 'react-dom';


const MoreAnswers = ({ moreAnswerRender, answerLength }) => {

  if (answerLength.length <= 2) {
    return <span></span>
  } else {
    return (
      <div>
        <button className='more-answers' onClick={moreAnswerRender}>LOAD MORE ANSWERS</button>
      </div>
    )
  }
}


export default MoreAnswers;
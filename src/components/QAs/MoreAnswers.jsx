import React from 'react';
import ReactDOM from 'react-dom';


const MoreAnswers = ({ rendering }) => {

  return (
    <div>
      <button onClick={rendering}>More Answered Questions</button>
    </div>
  )
}


export default MoreAnswers;
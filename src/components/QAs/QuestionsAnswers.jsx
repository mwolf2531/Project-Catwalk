import React, { Component } from 'react';
import HelpfulQuestion from './HelpfulQuestion.jsx';
import HelpfulAnswer from './HelpfulAnswer.jsx'
import AddAnswer from './AddAnswer.jsx';
import Report from './Report.jsx';
import axios from 'axios';
import MoreAnswers from './MoreAnswers.jsx';


const QuestionsAnswers = ({ search, question, handleSearchChange, render, answerRender, answerRenderClick }) => {

  const filteredMap =
    question.results.filter(questions => questions.question_body.toLowerCase().includes(search.toLowerCase()));

  function newDate(oldDate) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let newDate = new Date(oldDate);
    return months[newDate.getMonth()] + ' ' + newDate.getDay() + ', ' + newDate.getFullYear();
  }

  return (
    <div>
      {filteredMap.slice(0, render).map((questions, i) =>
        <div key={i}>
          <br></br>
          <div className='question-map'>Q: {questions.question_body}
            <div className='q-top-right'><HelpfulQuestion helpful={questions.question_helpfulness} /></div>
          </div>
          <div>
            {questions.answerData.slice(0, answerRender).map((answer, i) =>
              <div key={i}>
                <div className='answer-style'><span className='question-map'> A: </span>{answer.body}</div>
                <span className='answer-user-style'>by: {answer.answerer_name}, {newDate(answer.date)}</span>
                <span className='helpful-button'><HelpfulAnswer helpful={answer.helpfulness} /> | <Report /></span>
                <br></br>
              </div>
            )}
          </div>
          {/* <div onClick={answerRenderClick}><MoreAnswers /></div> */}
        </div>)
      }
    </div >
  )
}


export default QuestionsAnswers;


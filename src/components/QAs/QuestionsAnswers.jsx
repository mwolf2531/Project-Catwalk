import React, { Component } from 'react';
import HelpfulQuestion from './HelpfulQuestion.jsx';
import HelpfulAnswer from './HelpfulAnswer.jsx'
import AddAnswer from './AddAnswer.jsx';
import Report from './Report.jsx';
import axios from 'axios';
import MoreAnswers from './MoreAnswers.jsx';


const QuestionsAnswers = ({ search, question, handleSearchChange, render, answerRender }) => {

  const filteredMap =
    question.results.filter(questions => questions.question_body.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      {filteredMap.slice(0, render).map((questions, i) =>
        <div key={i}>
          <br></br>
          <div className='question-map'>Q: {questions.question_body}
            <div className='q-top-right'><HelpfulQuestion helpful={questions.question_helpfulness} /></div>
          </div>
          <br></br>
          <div>
            {questions.answerData.slice(0, 2).map((answer, i) =>
              <div key={i}>
                <div><span className='question-map'> A: </span>{answer.body}</div>
                <span>by: {answer.answerer_name} {answer.date}</span>
                <HelpfulAnswer helpful={answer.helpfulness} /> <Report />
                <br></br>
              </div>
            )}
          </div>
        </div>)
      }
    </div >
  )
}


export default QuestionsAnswers;


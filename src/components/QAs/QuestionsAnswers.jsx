import React, { Component } from 'react';
import HelpfulQuestion from './HelpfulQuestion.jsx';
import HelpfulAnswer from './HelpfulAnswer.jsx'
import AddAnswer from './AddAnswer.jsx';
import Report from './Report.jsx';
import axios from 'axios';



const QuestionsAnswers = ({ search, question, handleSearchChange, render }) => {

  const filteredMap =
    question.results.filter(questions => questions.question_body.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      {filteredMap.slice(0, render).map((questions, i) =>
        <div key={i}>
          <br></br>
          <div>Q: {questions.question_body}
            <div className='q-top-right'><HelpfulQuestion helpful={questions.question_helpfulness} /></div>
          </div>
          <br></br>
          <div>
            {questions.answerData.map((answer, i) =>
              <div key={i}>
                <div> A: {answer.body}</div>
                <div>by: {answer.answerer_name} {answer.question_date}</div>
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


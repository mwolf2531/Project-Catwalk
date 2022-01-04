import React, { Component } from 'react';
import HelpfulQuestion from './HelpfulQuestion.jsx';
import HelpfulAnswer from './HelpfulAnswer.jsx'
import AddAnswer from './AddAnswer.jsx';
import Report from './Report.jsx';
import axios from 'axios';



const QuestionsAnswers = ({ search, question, handleSearchChange, render }) => {

  const filteredMap =
    question.results.filter(questions => questions.question_body.toLowerCase().includes(search.toLowerCase()));

  const savedQuestions =
    question.results.map((questions) => { questions.question_id })
  //console.log(Object.values(question.results[0]))

  //const answerArray = Object.values()

  return (

    <div>
      {filteredMap.slice(0, render).map((questions, i) =>
        <div key={i}>
          <div>Q: {questions.question_body}
            <div className='q-top-right'><HelpfulQuestion helpful={questions.question_helpfulness} /></div>
          </div>
          <div>A: {questions.question_id}
          </div>
          <div>by {questions.answers.answerer_name}
          </div>
          <span>{questions.answers.date}
            <HelpfulAnswer helpful={questions.answers.helpfulness} /> <Report />
          </span>
        </div>)}
    </div>
  )
}


export default QuestionsAnswers;


import React, { Component } from 'react';
import Helpful from './Helpful.jsx';
import AddAnswer from './AddAnswer.jsx';
import Report from './Report.jsx';


const QuestionsAnswers = ({ search, question, handleSearchChange }) => {

  const filteredMap =
    question.results.filter(questions => questions.question_body.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      {filteredMap.map((questions, i) =>
        <div key={i}>
          <div>Q: {questions.question_body}
            <div className='q-top-right'><Helpful /></div>
          </div>
          <div>A: {questions.answers.answer_body}
          </div>
          <div>by {questions.answers.answerer_name}
          </div>
          <span>{questions.answers.date}
            <Helpful /> <Report />
          </span>
        </div>)}
    </div>
  )
}


export default QuestionsAnswers;

// To do:
//  Bring in the question and answer data from the API, including the user and the timestamp
//  Append the helpful, report and add answer coponents to each question and answer
//  Answers should appear in order of helpfulness
//  Add the add more questions functionality which expands the list of two current answers
// Enhancement:
//  Support the upload of images with an answer

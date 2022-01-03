import React, { Component } from 'react';
import Helpful from './Helpful.jsx';
import AddAnswer from './AddAnswer.jsx';
import Report from './Report.jsx';


const QuestionsAnswers = ({ search, question, handleSearchChange }) => {

  const questionMap = question.results.map((questions, i) =>
    <div>
      <div key={Math.random()}>Q: {questions.question_body}
        <div className='q-top-right'><Helpful /></div>
      </div>
      <div key={Math.random()}>A: {questions.answers.answer_body}
      </div>
      <div key={Math.random()}>by {questions.answers.answerer_name}
      </div>
      <span key={Math.random()}>{questions.answers.date}
        <Helpful /> <Report />
      </span>
    </div>
  );

  // const filterMap = question.results.filter((questions, i) => {
  //   if (search === null) {
  //     return questions.question_body;
  //   }
  //   else if (questions.question_body.toLowerCase().includes(search.toLowerCase())) {
  //     return questions;
  //   }
  // }).map((questions, i) =>
  //   <div>
  //     <div key={i}>Q: {questions.question_body}
  //       <Helpful />
  //     </div>
  //     <div key={i + 1}>A: {questions.answers.answer_body}</div>
  //     <div key={i + 2}>by {questions.answers.answerer_name}</div>
  //     <div key={i + 3}>{questions.answers.date}</div>
  //   </div>
  // );

  return (
    <div>
      {questionMap}
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

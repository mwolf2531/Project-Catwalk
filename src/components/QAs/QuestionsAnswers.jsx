import React from 'react';


const QuestionsAnswers = (props) => {

  return (
    <div>
      <div>Q: </div>
      <div>A: </div>
      <div>by User, January 1, 2019</div>
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

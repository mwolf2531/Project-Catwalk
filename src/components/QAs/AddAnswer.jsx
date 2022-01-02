import React from 'react';
import ReactDOM from 'react-dom';



const AddAnswer = ({ handleAnswerClose, showAnswer, showAnswerModal, children }) => {

  let showHideClassName = showAnswer ? "modal display-block" : "modal display-none";

  return (
    <div>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <form action="/action_page.php">
            <input type="text" placeholder="Name..." name="name" />
          </form>
          <form action="/action_page.php">
            <input type="text" placeholder="Email..." name="email" />
          </form>
          <form action="/action_page.php">
            <input type="text" placeholder="Answer..." name="question" />
          </form>
          <button type="button" onClick={handleAnswerClose}>
            Submit your Answer
          </button>
        </section>
      </div>
    </div>
  );
}


export default AddAnswer;


// To Do:
//   When clicking on this button, a modal should appear
//The modal should be titled “Submit your Answer”.  The modal should be subtitled:   “[Product Name]: [Question Body]” .  The   appropriate product name and question body should be inserted into the subtitle.
//   Required inputs: answer, nickname, email
//   They should also be able to add photos
//   Followed by a submit button
//   Submitting it will add the answer


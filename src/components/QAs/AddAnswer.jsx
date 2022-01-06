import React from 'react';
import ReactDOM from 'react-dom';



const AddAnswer = ({ handleAnswerClose, showAnswer, showAnswerModal, children }) => {

  let showHideClassName = showAnswer ? "modal display-block" : "modal display-none";

  return (
    <div>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <h1>Add an Answer</h1>
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
          <button type="button" onClick={handleAnswerClose}>
            Close
          </button>
        </section>
      </div>
    </div>
  );
}


export default AddAnswer;


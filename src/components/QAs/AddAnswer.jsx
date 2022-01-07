import React from 'react';
import ReactDOM from 'react-dom';



const AddAnswer = ({ handleAnswerClose, showAnswer, showAnswerModal, children, addAnAnswer }) => {

  let showHideClassName = showAnswer ? "modal display-block" : "modal display-none";

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <h1>ADD YOUR ANSWER</h1>
          <form action="/action_page.php">
            <input type="text" className="modal-inputs" placeholder="Name..." name="name" />
          </form>
          <form action="/action_page.php">
            <input type="text" className="modal-inputs" placeholder="Email..." name="email" />
          </form>
          <form action="/action_page.php">
            <input type="text" className='modal-message' placeholder="Answer..." name="question" />
          </form>
          <button type="button" className='more-questions-button' onClick={handleAnswerClose}>
            SUBMIT ANSWER
          </button>
          <button type="button" className='more-questions-button' onClick={handleAnswerClose}>
            CLOSE
          </button>
        </section>
      </div>
    </>
  );
}


export default AddAnswer;


import React from 'react';
import ReactDOM from 'react-dom';


const AddQuestion = ({ handleQuestionClose, showQuestion, children }) => {

  let showHideClassName = showQuestion ? "modal display-block" : "modal display-none";

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <h1>ADD YOUR QUESTION</h1>
          <form action="/action_page.php">
            <input type="text" className="modal-inputs" placeholder="Name..." name="name" />
          </form>
          <form action="/action_page.php">
            <input type="text" className="modal-inputs" placeholder="Email..." name="email" />
          </form>
          <form action="/action_page.php">
            <input type="text" className='modal-message' placeholder="Question..." name="question" />
          </form>
          <button type="button" className='more-questions-button' onClick={handleQuestionClose}>
            ASK YOUR QUESTION
          </button>
          <button type="button" className='more-questions-button' onClick={handleQuestionClose}>
            CLOSE
          </button>
        </section>
      </div>
    </>
  );
}


export default AddQuestion;

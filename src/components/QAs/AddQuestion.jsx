import React from 'react';
import ReactDOM from 'react-dom';


const AddQuestion = ({ handleQuestionClose, showQuestion, children }) => {

  let showHideClassName = showQuestion ? "modal display-block" : "modal display-none";

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <h1>Add a Question</h1>
          <form action="/action_page.php">
            <input type="text" placeholder="Name..." name="name" />
          </form>
          <form action="/action_page.php">
            <input type="text" placeholder="Email..." name="email" />
          </form>
          <form action="/action_page.php">
            <input type="text" placeholder="Question..." name="question" />
          </form>
          <button type="button" onClick={handleQuestionClose}>
            Ask your Question
          </button>
          <button type="button" onClick={handleQuestionClose}>
            Close
          </button>
        </section>
      </div>
    </>
  );
}


export default AddQuestion;

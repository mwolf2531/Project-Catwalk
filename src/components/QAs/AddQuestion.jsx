import React from 'react';
import ReactDOM from 'react-dom';


const AddQuestion = ({ handleQuestionClose, showQuestion, children, nameInput, emailInput, descriptionInput, handleSubmit }) => {

  let showHideClassName = showQuestion ? "modal display-block" : "modal display-none";

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <h1>ADD YOUR QUESTION</h1>
          <form action="/action_page.php" >
            <input type="text" className="modal-inputs" onChange={nameInput} placeholder="Name..." name="name" />
          </form>
          <form action="/action_page.php" >
            <input type="text" className="modal-inputs" onChange={emailInput} placeholder="Email..." name="email" />
          </form>
          <form action="/action_page.php" >
            <input type="text" className='modal-message' onChange={descriptionInput} placeholder="Question..." name="question" />
          </form>
          <button type="button" className='more-questions-button' onClick={handleSubmit}>
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

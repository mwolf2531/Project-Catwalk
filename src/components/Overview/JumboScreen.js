import React from 'react';
import ReactDOM from 'react-dom';

const JumboScreen = ({ handleClose, show, children, img }) => {
  const showHideClassName = show ? "modall display-block" : "modall display-none";

  return (
    <div className={showHideClassName}>
      <section className="jumbo-modal-main">
        {/* {children} */}
        <img onClick={handleClose} className="jumbo-image" src={img}/>
      </section>
    </div>
  );
};

export default JumboScreen
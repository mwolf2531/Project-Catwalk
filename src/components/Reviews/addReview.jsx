import React from 'react';
import ReactDOM from 'react-dom';


const AddReview = ({ onChangeReco, onChangeRating, onChangeUsername, onChangeEmail, onChangeBody, onChangeSummary, handleReviewSubmit, handleReviewClose, showReview, children }) => {

  let showHideClassName = showReview ? "modal display-block" : "modal display-none";

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <h1>Add a Review</h1>
          <div onChange={onChangeRating}>Rating:
            <input type="radio" id="1Star" name="rating" value={1} />
            <label htmlFor="1Star">1Star</label>
            <input type="radio" id="2Star" name="rating" value={2} />
            <label htmlFor="2Star">2Star</label>
            <input type="radio" id="3Star" name="rating" value={3} />
            <label htmlFor="3Star">3Star</label>
            <input type="radio" id="4Star" name="rating" value={4} />
            <label htmlFor="4Star">4Star</label>
            <input type="radio" id="5Star" name="rating" value={5} />
            <label htmlFor="5Star">5Star</label>
          </div>
          <div onChange={onChangeReco}>Would you recommend this product?
          <input type="radio" id="Yes" name="reco" value="true" />
            <label htmlFor="Yes">Yes</label>
            <input type="radio" id="No" name="reco" value="false" />
            <label htmlFor="No">No</label>
          </div>
          <form> Review Summary:
            <input type="text" onChange={onChangeSummary} placeholder="Example: Best purchase ever!" name="ReviewSummary" />
          </form>
          <form> Review Body:
            <input type="text" onChange={onChangeBody} placeholder="Why did you like the product or not? (min 50characters)" name="ReviewBody" />
          </form>
          <form> Username:
            <input type="text" onChange={onChangeUsername} placeholder="Do Not Use Real Names" name="Username" />
          </form>
          <form> Email (internal use only):
            <input type="text" onChange={onChangeEmail} placeholder="Valid Email Address Only" name="UserEmail" />
          </form>
          <button type="button" onClick={handleReviewSubmit}>
            Submit Review
          </button>
          <button type="button" onClick={handleReviewClose}>
            Cancel
          </button>
        </section>
      </div>
    </>
  );
}


export default AddReview;


/*
{
  product_id: 37314,
  rating: 3,
  summary: 'ReviewTitle',
  body: 'Review Body',
  recommend: true,
  name: 'ReviewerName',
  email: 'ReviewerEmail',
  photos: [],
  characteristics: {125042:3, 125040:2, 125041:2, 125043:3}
}
*/
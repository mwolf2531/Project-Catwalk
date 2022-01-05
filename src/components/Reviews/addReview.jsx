import React from 'react';
import ReactDOM from 'react-dom';


const AddReview = ({ onChangeRating, onChangeUsername, onChangeEmail, onChangeBody, onChangeSummary, handleReviewSubmit, handleReviewClose, showReview, children }) => {

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

//element that will popup to handle user submitting a new review

//Overal Rating
//User selects one from 1,2,3,4 or 5 Stars

//Would You Recommend This?
//User selects from yes or no

//Traits
//Create one trait prompt for each trait assigned to object
//User selects one from -1, -1/2, 0, +1/2 or +1 for the given trait

//Review Title
//Up to 60 characters, optional, placeholder: Example: Best purchase ever!

//Review Body
//Min 50 Characters, Max 1000 Characters, Placeholder: Why did you like the product or not?

//Click to Add Photos Button
//Click to open import photos prompt
//Low priority optional review element. Only takes images.

//Imported Photos
//Display the names of each photo imported, up to 5 imports

//Nickname Form
//Up to 60 characters to be used as displayName

//Email form
//up to 60 characters, internal use only

//Submit Button
//Submits the form if all required fields are filled out

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
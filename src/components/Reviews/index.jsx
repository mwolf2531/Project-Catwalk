import React from 'react';
import BodyElement from './bodyElement.jsx';
import Averages from './averagesElement.jsx';
import axios from 'axios';

//Main Reviews Element. Holds the bodyElement and averagesElement.
//contains the more reviews and add a review button
//data for the other elements is kept, stored, and referenced from here
class ReviewWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }
  //Initialize - download all review data from the database for this product
  //API request to server - get all review data
  //Store review data in the state
  initialize() {
    //TODO
  }

  getReviews() {
    axios.get('/api/reviews')
      .then(function (res) {
        console.log('Axios /reviews ', res);
        this.setState({
          reviews: res
        });
      })
      .catch(function (err) {
        console.log('Axios /reviews failed >', err);
      });
  }

  render() {
    this.getReviews();
    return <div className="reviews"> Reviews Section
      {/* <Averages />
      <BodyElement />
    //More Reviews Button
      //Adds two more reviews to the scrollable list of reviews in the Body Element
      <button>More Reviews</button>
    //Add A Review Button
      //Calls the popup to add a review found in addReview
      <button>Add A Review +</button> */}
    </div>
  }

}

export default ReviewWidget;
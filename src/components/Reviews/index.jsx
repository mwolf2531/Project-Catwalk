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
    this.getReviews = this.getReviews.bind(this);
  }

  getReviews() {
    axios.get('/api/reviews')
      .then( (res) => {
        this.setState({reviews: res.data});
        // console.log(this.state)
      })
      .catch( (err) => {
        console.log('Axios /reviews failed >', err);
      });
  }
  componentDidMount() {
    this.getReviews();
  }
  render() {
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
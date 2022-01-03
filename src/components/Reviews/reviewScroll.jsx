//This element holds the scrollable list of reviews

//Intialize
//build display for review 1 and review 2 using import review.jsx
//place review 1 and review 2 into scrollable list and display

//Add Review Handler
//If Add A Review is clicked in the bodyElement:
//Add (up to) two more reviews to scrollable list
//if all reviews have been displayed, disable add review button

import React from 'react';
import Review from './review.jsx';
class ReviewScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revs: []
    };
    this.updateReviews = this.updateReviews.bind(this);
  }
  updateReviews() {
    if (this.state.revs.length < 2) {
      let reviews = this.props.reviews;
      if (reviews.length >= 2) {
        this.setState({revs: [reviews[0], reviews[2]]})
      }
    }
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews) {
      this.updateReviews();
    }
  }
  render() {
    return (
    <div className="revScroll"> Review Scroll Starts Here
      <Review review={this.state.revs[0]} />
      <Review review={this.state.revs[1]} />
    </div>
    )
  }

}
export default ReviewScroll;
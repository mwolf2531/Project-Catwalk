//This file houses the reviewSort element as well as the reviewScroll of reviews
import React from 'react';
import ReviewSort from './reviewSort.jsx';
import ReviewScroll from './reviewScroll.jsx';
class BodyElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRevs: [],
      numRevs: 0
    };
    this.updateReviews = this.updateReviews.bind(this);
  }
  updateReviews() {
    let revs = this.props.reviews.results;
    if (revs) {
      if (revs.length > this.state.allRevs.length) {
        this.setState({ allRevs: revs, numRevs: revs.length});
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
    <div className="revBody"> MAIN ELEMENT
      <ReviewSort />
      <ReviewScroll reviews={this.state.allRevs}/>
    </div>
    )
  }

}
export default BodyElement;
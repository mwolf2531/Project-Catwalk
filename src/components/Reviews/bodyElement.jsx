//This file houses the reviewSort element as well as the reviewScroll of reviews
import React from 'react';
import ReviewSort from './reviewSort.jsx';
import ReviewScroll from './reviewScroll.jsx';
class BodyElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRevs: [],
      numRevs: 0,
      renderRevs: [],
      numRenders: 0
    };
    this.updateReviews = this.updateReviews.bind(this);
    this.addTwo = this.addTwo.bind(this);
    this.moreRevsClick = this.moreRevsClick.bind(this);
  }
  updateReviews() {
    let revs = this.props.reviews.results;
    if (revs) {
      if (revs.length > this.state.allRevs.length) {
        this.setState({
          allRevs: revs,
          numRevs: revs.length,
          numRenders: 2
        });
      }
    }
  }
  addTwo() {
    let revs = this.state.allRevs;
    let rends = this.state.renderRevs;
    let numRevs = this.state.numRevs;
    let numRends = this.state.numRenders;
    if (numRends < numRevs) {
      let two = 2;
      while (two > 0 && numRends < numRevs) {
        let index = rends.length;
        rends.push(revs[index]);
        two--;
      }
      this.setState({
        renderRevs: rends,
        numRenders: numRends
      });
    }
  }
  moreRevsClick() {
    let numRenders = this.state.numRenders;
    numRenders += 2;
    this.setState({numRenders});
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews) {
      this.updateReviews();
    }
    if (this.state.numRenders > this.state.renderRevs.length) {
      this.addTwo();
    }
  }
  render() {
    return (
    <div className="revBody"> MAIN ELEMENT
      <ReviewSort />
      <ReviewScroll reviews={this.state.renderRevs}/>
      <button type="button" onClick={this.moreRevsClick}>More Reviews</button>
      <button>Add A Review +</button>
    </div>
    )
  }

}
export default BodyElement;
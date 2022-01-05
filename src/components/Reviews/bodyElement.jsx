//This file houses the reviewSort element as well as the reviewScroll of reviews
import React from 'react';
import ReviewScroll from './reviewScroll.jsx';
import AddReview from './addReview.jsx';
import axios from 'axios';
class BodyElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: { results: [] },
      allRevs: [],
      numRevs: 0,
      renderRevs: [],
      numRenders: 0,
      uProduct_id: 37314,
      uRating: 3,
      uSummary: 'ReviewTitleFromReact',
      uBody: 'REACT react REACT react REAAAAAAAACCCCCCCTTTTTT',
      uRecommend: true,
      uName: 'ReviewerNameReact',
      uEmail: 'ReviewerEmail@email.com',
      uPhotos: [],
      uCharacteristics: {}
    };
    this.updateReviews = this.updateReviews.bind(this);
    this.addTwo = this.addTwo.bind(this);
    this.moreRevsClick = this.moreRevsClick.bind(this);
    this.showReviewModal = this.showReviewModal.bind(this);
    this.hideReviewModal = this.hideReviewModal.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.onChangeSummary = this.onChangeSummary.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeReco = this.onChangeReco.bind(this);
  }
  onChangeRating(e) {
    this.setState({
      uRating: Number(e.target.value)
    });
  }
  onChangeReco(e) {
    if (e === 'true') {
      this.setState({
        uRecommend: true
      });
    } else {
      this.setState({
        uRecommend: false
      });
    }
  }
  onChangeSummary(e) {
    this.setState({
      uSummary: e.target.value
    });
  }
  onChangeBody(e) {
    this.setState({
      uBody: e.target.value
    });
  }
  onChangeUsername(e) {
    this.setState({
      uName: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      uEmail: e.target.value
    });
  }
  updateReviews() {
    let revs = this.state.reviews.results;
    if (revs) {
      if (revs.length > this.state.allRevs.length) {
        this.setState({
          allRevs: revs,
          numRevs: revs.length,
          numRenders: 2,
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
  getReviews() {
    axios.get('/api/reviews')
      .then((res) => {
        this.setState({ reviews: res.data });
        // console.log(this.state)
      })
      .catch((err) => {
        console.log('Axios /reviews failed >', err);
      });
  }
  moreRevsClick() {
    let numRenders = this.state.numRenders;
    numRenders += 2;
    this.setState({ numRenders });
  }
  showReviewModal = () => {
    this.setState({ showReview: true });
  };

  hideReviewModal = () => {
    this.setState({ showReview: false });
  };

  submitReview = () => {
    console.log('Submit State', this.state)
    let userRev = {
      product_id: this.state.uProduct_id,
      rating: this.state.uRating,
      summary: this.state.uSummary,
      body: this.state.uBody,
      recommend: this.state.uRecommend,
      name: this.state.uName,
      email: this.state.uEmail,
      photos: this.state.uPhotos,
      characteristics: this.state.uCharacteristics
    };
    axios.post('/api/reviews', userRev)
      .then((res) => {
        this.getReviews();
      })
      .catch((err) => {
        console.log('Axios post review failed');
      })
    this.hideReviewModal();
  };

  componentDidMount() {
    this.getReviews();
  }
  componentDidUpdate(prevProps) {
    if (this.state.allRevs.length !== this.state.reviews.results.length) {
      this.updateReviews();
    }
    if (this.state.numRenders !== this.state.renderRevs.length) {
      this.addTwo();
    }
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="sort">Sort Reviews By:</label>
          <select id="sort" name="sort">
            <option value="newest">Newest</option>
            <option value="helpful">Helpful</option>
            <option value="relevant">Relevant</option>
          </select></div>
        <ReviewScroll reviews={this.state.renderRevs} />
        <button type="button" onClick={this.moreRevsClick}>More Reviews</button>
        <span className='revButtons'>
          <AddReview
            showReview={this.state.showReview}
            handleReviewSubmit={this.submitReview}
            handleReviewClose={this.hideReviewModal}
            onChangeSummary={this.onChangeSummary}
            onChangeBody={this.onChangeBody}
            onChangeUsername={this.onChangeUsername}
            onChangeEmail={this.onChangeEmail}
            onChangeRating={this.onChangeRating}
            onChangeReco={this.onChangeReco} />
          <button type="button"
            onClick={this.showReviewModal}>
            Add Review +
          </button>
        </span>
      </div>
    )
  }

}
export default BodyElement;
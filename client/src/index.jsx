import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import Summary from './components/Summary.jsx';

class ReviewsModule extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleBackToAllReviews = this.handleBackToAllReviews.bind(this);

    this.state = {
      reviews: [],          //arr of all reviews for a particular listing, can use length to show total # reviews
      filteredReviews: [],  //arr of filtered reviews based on search bar,
      search: '',            //used to filter reviews
      accuracy: 0,          //average of all accuracy ratings
      communication: 0,     //average of all communication ratings
      cleanliness: 0,       //average of all cleanliness ratings
      location: 0,          //average of all location ratings
      checkin: 0,           //average of all checkin ratings
      value: 0,             //average of all value ratings
      overall: 0            //average of all the averages
    };
  }

  //make a function to filter reviews based on state's search string
  handleSearchSubmit(e) {
    e.preventDefault();
    let input = $('#search-reviews').val();
    let filter = this.state.reviews.filter(review => review.comment.includes(input));
    this.setState(prevState => ({
      filteredReviews: filter,
      search: input
    }));
  }

  handleBackToAllReviews() {
    this.setState({filteredReviews: []});
  }

  componentDidMount() {
    //1. get all the reviews for a particular listing
    let listingID = window.location.href.split('/')[4];
    axios.get(`/api/listings/${listingID}/reviews`)
    .then((data) => {
      //2. update the reviews state
      console.log(`AXIOS GOT LISTING ${listingID}'S REVIEWS`);
      this.setState({
        reviews: data.data
      });
    })
    .then(() => {
      //3. update each rating's state
      let accuracy = 0;
      let communication = 0;
      let cleanliness = 0;
      let location = 0;
      let checkin = 0;
      let value = 0;
      this.state.reviews.forEach((review) => {
        accuracy += review.accuracy;
        communication += review.communication;
        cleanliness += review.cleanliness;
        location += review.location;
        checkin += review.checkin;
        value += review.value;
      });
      let numReviews = this.state.reviews.length;
      this.setState({
        accuracy: Math.round(accuracy / numReviews * 2) / 2,
        communication: Math.round(communication / numReviews * 2) / 2,
        cleanliness: Math.round(cleanliness / numReviews * 2) / 2,
        location: Math.round(location / numReviews * 2) / 2,
        checkin: Math.round(checkin / numReviews * 2) / 2,
        value: Math.round(value / numReviews * 2) / 2
      })
    })
    .then(() => {
      //4. update the overall rating
      let overall =
        this.state.accuracy +
        this.state.communication +
        this.state.cleanliness +
        this.state.location +
        this.state.checkin +
        this.state.value;
      this.setState({
        overall: Math.round(overall / 6 * 2) / 2
      });
    })
    .catch(function(error) {
      console.log('AXIOS CATCH ERROR:');
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <div>
          <Summary
            states={this.state}
            searchSubmit={this.handleSearchSubmit}
            backToAllReviews={this.handleBackToAllReviews}
          />
        </div>
        <div>
          {/* <ReviewList reviews={this.state.reviews} /> */}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<ReviewsModule />, document.getElementById('reviews'));
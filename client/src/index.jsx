import React from 'react';
import ReactDOM from 'react-dom';

class ReviewsModule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [], //arr of all reviews for a particular listing, can use length to show total # reviews
      search: '', //used to filter reviews
      accuracy: 0,      //average of all accuracy ratings
      communication: 0, //average of all communication ratings
      cleanliness: 0,   //average of all cleanliness ratings
      location: 0,      //average of all location ratings
      checkin: 0,       //average of all checkin ratings
      value: 0,         //average of all value ratings
      overall: 0 //average of all the averages
    };
  }



  render() {
    return (
      <div>Hello, so we meet again, World</div>
    )
  }
}

ReactDOM.render(<ReviewsModule />, document.getElementById('reviews'));
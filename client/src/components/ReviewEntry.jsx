import React from 'react';
import axios from 'axios';

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      response: ''
    };
  }

  componentDidMount() {
    let userID = this.props.reviewEntry.users_id;
    axios.get(`/api/listings/users/${userID}`)
    .then(listingUser => {
      this.setState({
        user: listingUser.data[0]
      })
    })
    .catch(error => {
      console.log(`AXIOS GET LISTING ${listingID}'S USER ERROR:`);
      console.log(error);
    })

    let responseID = this.props.reviewEntry.responses_id;
    if (responseID) {
      axios.get(`/api/listings/review/response/${responseID}`)
      .then(reviewResponse => {
        console.log(reviewResponse.data[0].comment)
        this.setState({
          response: reviewResponse.data[0].comment
        })
      })
      .catch(error => {
        console.log(`AXIOS GET REVIEW'S RESPONSE ERROR:`);
        console.log(error);
      })
    }
  }

  render() {
    let response = '';
    if (this.props.reviewEntry.responses_id) {
      response =
        <div>
          <div>
            <img src={this.props.hostInfo.host_pic} alt=""/>
          </div>
          <div>
            Response from {this.props.hostInfo.host_name}
          </div>
          <div>
            {this.state.response}
          </div>
        </div>
    }

    return(
      <div>
        <div>
          <img src={this.state.user.pic} alt=""/>
        </div>
        <div>
          {this.state.user.name}
        </div>
        <div>
          {this.props.reviewEntry.date}
        </div>
        <div>
          {this.props.reviewEntry.comment}
        </div>
        <div>
          {response}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default ReviewEntry;
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        type="search"
        name="search-reviews"
        id="search-reviews"
        placeholder="Search Reviews"
        onChange={this.props.searchSubmit} //NEED TO CHANGE THIS TO onSubmit or some way of using Enter to submit
      />
    )
  }
}

export default Search;

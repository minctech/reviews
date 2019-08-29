import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <form onSubmit={this.props.searchSubmit} autoComplete="off">
          <input
            type="search"
            name="search-reviews"
            id="search-reviews"
            placeholder="Search reviews"
          />
        </form>
      </span>
    )
  }
}

export default Search;

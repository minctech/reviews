import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.form`
  display: inline;
  float: right;
`;

const SearchInput = styled.input`
  border-radius: 3px;
  border: 1px solid #ddd;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <SearchBar onSubmit={this.props.searchSubmit} autoComplete="off">
          <SearchInput
            type="search"
            name="search-reviews"
            id="search-reviews"
            placeholder="🔍 Search reviews"
          />
        </SearchBar>
      </span>
    )
  }
}

export default Search;

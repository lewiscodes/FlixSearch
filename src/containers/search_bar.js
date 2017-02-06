import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  render() {
    return (
      <input
        className = "searchBar"
        placeholder = "Search for a Movie or TV Show here..."
      />
    )
  }
}

export default connect(null, null)(SearchBar)

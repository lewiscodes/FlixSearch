import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSearch } from '../actions/index';

class SearchBar extends Component {

  search(event) {
    getSearch(event.target.value);
  }

  render() {
    return (
      <input
        className = "searchBar"
        placeholder = "Search for a Movie or TV Show here..."
        onChange = {(event) => {this.search(event)}}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSearch }, dispatch)
}

function mapStateToProps(state) {
  return { results: state.searchReducer.results }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSearch } from '../actions/index';
import Lodash from 'lodash';

class SearchBar extends Component {

  search(event) {
    const delayEvent = _.debounce((term) => {
      // this.props.getSearch(event.target.value);
      this.props.getSearch(term);
      this.props.fetchResults();
    }, 5000);

    delayEvent(event.target.value);
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
  return { results: state.resultsReducer.results }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

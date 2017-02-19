import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSearch, updateMovieIndex } from '../actions/index';
import { Link } from 'react-router';

class Filter extends Component {

  submitSearch = () => {
    var certificate = this.props.selectedCertificate;
    var genres = this.props.selectedGenres.join();

    this.props.getSearch(certificate, genres);
  }

  render() {
    return (
      <Link
        onClick={this.submitSearch}
        to="/results"
        >Search
      </Link>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSearch }, dispatch)
}

function mapStateToProps(state) {
  return { selectedCertificate: state.filterReducer.selectedCertificate, selectedGenres: state.filterReducer.selectedGenres }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSelectedCertificate, removeSelectedCertificate, addSelectedGenre, removeSelectedGenre } from '../actions/actions_filter';

class Filter extends Component {
  constructor(props) {
    super(props)

    this.state = { availableCertificates: ["U", "PG", "12A", "15", "18"],
                    availableGenres: ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"]
                  }
  }

  genreEvent(event, genre) {
    if (event.target.checked === true) {
      this.props.addSelectedGenre(genre);
    } else {
      this.props.removeSelectedGenre(genre);
    }
  }

  renderGeneres() {
    return (
      <form>
        <h2>Genre</h2>
        {this.state.availableGenres.map((genre) => {
          return (
            <input
              key={genre}
              type="checkbox"
              onChange={(event) => {this.genreEvent(event, genre)}}>
            {genre}</input>
          )
        })}
      </form>
    )
  }

  certificateEvent(event, certificate) {

    if (event.target.checked === true) {
      this.props.addSelectedCertificate(certificate);
    } else {
      this.props.removeSelectedCertificate(certificate);
    }
  }

  renderCertificates() {
    return (
      <form>
      <h2>Certificate</h2>
        {this.state.availableCertificates.map((certificate) => {
          return (
            <input
              key={certificate}
              type="checkbox"
              onChange={(event) => {this.certificateEvent(event, certificate)}}>
            {certificate}</input>
          )
        })}
      </form>
    )
  }

  render() {
    return (
      <div>
        {this.renderCertificates()}
        {this.renderGeneres()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addSelectedCertificate, removeSelectedCertificate, addSelectedGenre, removeSelectedGenre }, dispatch)
}

function mapStateToProps(state) {
  return { selectedCertificates: state.filterReducer.selectedCertificates, selectedGenres: state.filterReducer.selectedGenres }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

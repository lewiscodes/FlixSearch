import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCertificate, removeCertificate, addGenre, removeGenre } from '../actions/actions_filter';

class Filter extends Component {
  constructor(props) {
    super(props)

    this.state = { availableCertificates: ["U", "PG", "12A", "15", "18"],
                    availableGenres: ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"]
                  }
  }

  genreEvent(event, genre) {
    if (event.target.checked === true) {
      this.props.addGenre(genre);
    } else {
      this.props.removeGenre(genre);
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
      this.props.addCertificate(certificate);
    } else {
      this.props.removeCertificate(certificate);
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
  return bindActionCreators({ addCertificate, removeCertificate, addGenre, removeGenre }, dispatch)
}

function mapStateToProps(state) {
  return { certificates: state.filterReducer.certificates, genres: state.filterReducer.genres }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

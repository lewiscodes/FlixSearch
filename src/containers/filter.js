import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCertificates, addSelectedCertificate, removeSelectedCertificate, getGenres, addSelectedGenre, removeSelectedGenre } from '../actions/actions_filter';

class Filter extends Component {
  constructor(props) {
    super(props)

    this.state = {availableGenres: ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"]}
  }

  componentWillMount() {
    this.props.getCertificates();
    this.props.getGenres();
  }

  genreEvent(event, genre) {
    if (event.target.checked === true) {
      this.props.addSelectedGenre(genre);
    } else {
      this.props.removeSelectedGenre(genre);
    }
  }

  renderGenres() {
    if (this.props.allGenres.genres) {
      return (
        <form>
          <h2>Genre</h2>
            {this.props.allGenres.genres.map((item) => {
              return (
                <div key={item.name}>
                  <label>{item.name}</label>
                  <input
                    type="checkbox"
                    onChange={(event) => {this.genreEvent(event, item.name)}}
                  />
                </div>
              )
            })}
        </form>
      )
    }
  }

  certificateEvent(event, certificate) {

    if (event.target.checked === true) {
      this.props.addSelectedCertificate(certificate);
    } else {
      this.props.removeSelectedCertificate(certificate);
    }
  }

  renderCertificates () {
    if (this.props.allCertificates) {
      return (
        <form>
          <h2>Certficate</h2>
          {this.props.allCertificates.map((item) => {
            return (
              <div key={item.certification}>
                <label>{item.certification}</label>
                <input
                  type="checkbox"
                  onChange={(event) => {this.certificateEvent(event, item.certification)}}
                />
              </div>
            )
          })}
        </form>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderCertificates()}
        {this.renderGenres()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCertificates, addSelectedCertificate, removeSelectedCertificate, getGenres, addSelectedGenre, removeSelectedGenre }, dispatch)
}

function mapStateToProps(state) {
  return { allCertificates:state.filterReducer.allCertificates, selectedCertificates: state.filterReducer.selectedCertificates, allGenres: state.filterReducer.allGenres, electedGenres: state.filterReducer.selectedGenres }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

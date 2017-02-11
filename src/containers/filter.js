import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCertificates, addSelectedCertificate, getGenres, addSelectedGenre, removeSelectedGenre } from '../actions/actions_filter';
import { getSearch } from '../actions/index';
import Results from './results';

class Filter extends Component {

  componentWillMount() {
    this.props.getCertificates();
    this.props.getGenres();
  }

  genreEvent(event, genreID) {
    if (event.target.checked === true) {
      this.props.addSelectedGenre(genreID);
    } else {
      this.props.removeSelectedGenre(genreID);
    }
  }

  renderGenres() {
    if (this.props.allGenres.genres) {
      return (
        <form>
          <h2>Genre</h2>
            {this.props.allGenres.genres.map((item) => {
              return (
                <div key={item.id}>
                  <label>{item.name}</label>
                  <input
                    type="checkbox"
                    value={item.id}
                    onChange={(event) => {this.genreEvent(event, item.id)}}
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
                  type="radio"
                  name="certificate"
                  onChange={(event) => {this.certificateEvent(event, item.certification)}}
                />
              </div>
            );
          })}
        </form>
      )
    }
  }

  submitSearch() {
    var certificate = this.props.selectedCertificate;
    var genres = this.props.selectedGenres.join();

    this.props.getSearch(certificate, genres);
  }

  render() {
    return (
      <div>
        {this.renderCertificates()}
        {this.renderGenres()}
        <button
        onClick={this.submitSearch.bind(this)}>
        Search</button>
        <Results />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCertificates, addSelectedCertificate, getGenres, addSelectedGenre, removeSelectedGenre, getSearch }, dispatch)
}

function mapStateToProps(state) {
  return { allCertificates:state.filterReducer.allCertificates, selectedCertificate: state.filterReducer.selectedCertificate, allGenres: state.filterReducer.allGenres, selectedGenres: state.filterReducer.selectedGenres }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

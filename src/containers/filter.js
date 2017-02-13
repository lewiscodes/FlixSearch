import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCertificates, addSelectedCertificate, getGenres, addSelectedGenre, removeSelectedGenre } from '../actions/actions_filter';
import { getSearch } from '../actions/index';
import Results from './results';

class Filter extends Component {

  componentWillMount = () => {
    this.props.getCertificates();
    this.props.getGenres();
  }

  genreEvent = (event, genreID) => {
    if (event.target.checked === true) {
      this.props.addSelectedGenre(genreID);
    } else {
      this.props.removeSelectedGenre(genreID);
    }
  }

  renderGenres = () => {
    if (this.props.allGenres.genres) {
      return (
        <div className="genres">
          {this.props.allGenres.genres.map((item) => {
            return (
              <div className="genre" key={item.id}>
                <input
                  type="checkbox"
                  name="genre"
                  id={item.name}
                  value={item.id}
                  onChange={(event) => {this.genreEvent(event, item.id)}}
                />
                <label className="checkbox" htmlFor={item.name}>
                  <label className="checkboxSelect" htmlFor={item.name}></label>
                  <label className="label" htmlFor={item.name}>{item.name}</label>
                </label>
              </div>
            )
          })}
        </div>
      )
    }
  }

  certificateEvent = (event, certificate) => {
    if (event.target.checked === true) {
      this.props.addSelectedCertificate(certificate);
    }
  }

  renderCertificates = () => {
    if (this.props.allCertificates) {
      return (
        <div className="certificates">
          <div className="certificate">
            <input
              type="radio"
              name="certificate"
              id="All"
              onChange={(event) => {this.certificateEvent(event, "All")}}
            />
            <label htmlFor="All" className="radioButton">
              <label htmlFor="All" className="radioButtonSelect"></label>
            </label>
            <label className="label" htmlFor="All">All</label>
          </div>
          {this.props.allCertificates.map((item) => {
            return (
              <div className="certificate" key={item.certification}>
                <input
                  type="radio"
                  name="certificate"
                  id={item.certification}
                  onChange={(event) => {this.certificateEvent(event, item.certification)}}
                />
                <label htmlFor={item.certification} className="radioButton">
                  <label htmlFor={item.certification} className="radioButtonSelect"></label>
                </label>
                <label className="label" htmlFor={item.certification}>{item.certification}</label>
              </div>
            );
          })}
        </div>
      )
    }
  }

  submitSearch = () => {
    var certificate = this.props.selectedCertificate;
    var genres = this.props.selectedGenres.join();

    this.props.getSearch(certificate, genres);
  }

  render() {
    return (
      <div className="filter">
        {this.renderCertificates()}
        {this.renderGenres()}
        <div className="searchButton">
          <button
            onClick={this.submitSearch()}>
          Search</button>
        </div>
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

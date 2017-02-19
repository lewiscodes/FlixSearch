import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGenres, addSelectedGenre, removeSelectedGenre } from '../actions/actions_filter';

class FilterGenres extends Component {

  componentWillMount = () => {
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

  render() {
    return (
      <div className="filter">
        {this.renderGenres()}
        <div className="searchButton">
          <button
            onClick={this.submitSearch}>
          Search</button>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getGenres, addSelectedGenre, removeSelectedGenre }, dispatch)
}

function mapStateToProps(state) {
  return { allGenres: state.filterReducer.allGenres, selectedGenres: state.filterReducer.selectedGenres }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterGenres);

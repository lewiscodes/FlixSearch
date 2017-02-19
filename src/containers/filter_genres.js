import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { getGenres, addSelectedGenre, removeSelectedGenre } from '../actions/actions_filter';
import Checkbox from '../components/checkbox';

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
              <Checkbox
                name={item.name}
                id={item.id}
                key={item.id}
                changeEvent={this.genreEvent}
              />
            )
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="filterGenres">
        {this.renderGenres()}
        <Link to="/filter">Next</Link>
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

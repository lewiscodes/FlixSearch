import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from '../actions/index';
import Tile from '../components/tile';

class Results extends Component {

  componentWillMount() {
    this.fetchResults();
  }

  fetchResults = () => {
    this.props.movieIdList.map((movieID) => {
      this.props.getMovie(movieID);
    });
  }

  renderResults = () => {
    if (this.props.movies.length > 0) {
      return (
        <div>
          {this.props.movies.map((movie) => {
            return (
              <Tile
                key={movie.id}
                title={movie.original_title}
                year={movie.release_date}
                poster={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                synopsis={movie.overview}
                genre={movie.genres}
              />
            )
          })}
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        {this.renderResults()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMovie }, dispatch)
}

function mapStateToProps(state) {
  return { movies: state.moviesReducer.movies, movieIdList: state.resultsReducer.results }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);

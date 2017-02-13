import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie, updateMovieIndex } from '../actions/index';
import Tile from '../components/tile';

class Results extends Component {

  componentWillMount() {
    this.props.getMovie(this.props.movieIdList[0]);
    this.props.updateMovieIndex(1);
  }

  getNextMovie = () => {
    var nextMovieId = this.props.lastMovieArrayIndex;
    this.props.getMovie(this.props.movieIdList[nextMovieId]);
    this.props.updateMovieIndex(nextMovieId+1);
  }

  renderResults = () => {
    if (this.props.movies.length > 0) {
      return (
        <div>
          <div>
            <button
              onClick={this.getNextMovie}
              >Next</button>
          </div>
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
  return bindActionCreators({ getMovie, updateMovieIndex }, dispatch)
}

function mapStateToProps(state) {
  return { movies: state.moviesReducer.movies, movieIdList: state.resultsReducer.results, lastMovieArrayIndex: state.resultsReducer.lastMovieArrayIndex }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);

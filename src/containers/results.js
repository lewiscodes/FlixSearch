import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from '../actions/index';
import Tile from '../components/tile';

class Results extends Component {
  componentWillMount() {

    this.props.movieIdList.map((movieID) => {
      this.props.getMovie(movieID);
    });
  }

  renderResults() {
    console.clear();
    this.props.movies.map((movie) => {
      console.log(movie);
      return (
        <div>
          <p>bbbbbbb</p>
          <Tile
            title={movie.original_title}
            year={movie.release_date}
            poster={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            synopsis={movie.overview}
            genre={movie.genres}
          />
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.movies);
    return(
      <div>
        <p>aaaaaaa</p>
        {this.renderResults()}
        <p>ccccccc</p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMovie }, dispatch)
}

function mapStateToProps(state) {
  return { movies: state.moviesReducer.movies, movieIdList: state.moviesReducer.movieIdList}
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);

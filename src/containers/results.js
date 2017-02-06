import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from '../actions/index';
import Tile from '../components/tile';

class Results extends Component {
  componentWillMount() {
    this.props.getMovie(550);
  }

  renderResults() {
    return(
      <Tile
        title={this.props.movie.original_title}
        year={this.props.movie.release_date}
        poster={"https://image.tmdb.org/t/p/w500/" + this.props.movie.poster_path}
        synopsis={this.props.movie.overview}
        genre={this.props.movie.genres}
      />
    )
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
  return { movie: state.movie.movie}
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);

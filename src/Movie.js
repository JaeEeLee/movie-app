import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

class Movie extends Component {

  //부모 컴포넌트가 string인지 아닌지 체크
  static propTypes = {
    title : PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired 
  }

  render() {
    return(
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

// class MoviePoster extends Component{
//   static propTypes = {
//     poster : PropTypes.string.isRequired
//   }
//   render(){
//     return (
//       <img className="poster_img" src={this.props.poster} alt={this.props.title} />
//     )
//   }
// }

function MoviePoster({poster}){
  return (
    <img className="poster_img" src={poster} alt="Movie Poster"/>
  )
}

export default Movie;

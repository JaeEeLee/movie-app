import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

//class 대신 functional Component 사용

function Movie({title, poster}){
  return (
    <div>
      <MoviePoster poster={poster} />
      <h2>{title}</h2>
    </div>
  )
}

function MoviePoster({poster}){
  return (
    <img className="poster_img" src={poster} alt="Movie Poster"/>
    )
  }
  
  //부모 컴포넌트가 string인지 아닌지 체크
  Movie.propTypes = {
    title  : PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }

MoviePoster.propTypes = {
  poster : PropTypes.number.isRequired
}

export default Movie;

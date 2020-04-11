import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';
import LinesElipsis from 'react-lines-ellipsis';

//class 대신 functional Component 사용

function Movie({title, poster, genres, synopsis}){
  return (
      <div className="Movie">
            <div className="Movie__Column"> 
            <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column"> 
                  <h2>{title}</h2>
                  <div className="Movie__Genres">
                        {genres.map((genre,index) => <MovieGenre genre={genre} key={index}/>)}
                  </div>
                  <div className="Movie__Synopsis">
                        <LinesElipsis
                              text={synopsis}
                              maxLine='3'
                              ellipsis='...'
                              trimRight
                              baseon='letters'
                        />
                  </div>
            </div>
      </div>
  )
}

function MoviePoster({poster,alt}){
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
  }

  function MovieGenre({genre}){
      return (
            <span className="Movie__Genre">{genre}</span>
      )
}
  
  //부모 컴포넌트가 string인지 아닌지 체크
      Movie.propTypes = {
            title   : PropTypes.string.isRequired,
            poster  : PropTypes.string.isRequired,
            genres  : PropTypes.array.isRequired,
            synopsis: PropTypes.string.isRequired
      }

      MoviePoster.propTypes = {
            poster : PropTypes.string.isRequired,
            alt    : PropTypes.string.isRequired
      }
      
      MovieGenre.propTypes = {
            genre : PropTypes.string.isRequired
      }


export default Movie;

import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Updaste componentWillReceiveProps() -> shouldComponentUpdate() -> componentWiilUpldate() -> render() -> componentDidUpdate()

   state ={}
   componentDidMount(){
    const url = 'https://yts.ag/api/v2/list_movies.json?sort_by=rating';
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
   }
/**
 * Promise
 * javascript concept
 * 비동기 프로그래밍이 가능. 
 */
  _renderMovies = () => {
   const movies = this.state.movies.map((movie,index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies;
  }

  render() {
    return (
      <div className="App">
       {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    )
  }
}

export default App;

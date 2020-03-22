import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'
import Axios from 'axios';

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Updaste componentWillReceiveProps() -> shouldComponentUpdate() -> componentWiilUpldate() -> render() -> componentDidUpdate()

   state ={
     movies : []
   }
   componentDidMount(){
     this._getMovies();
    }
/**
 * Promise
 * javascript concept
 * 비동기 프로그래밍이 가능. 
 */

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      //component의 key를 인덱스로 사용하는 것은 느리기때문에 지양하는 방법
        return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id }/>
      })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi() {
    const apiUrl = 'dummy/list_movies.json';
  /* //  CORS 공부할것..
  const url = 'https://yts.ag/api/v2/list_movies.json?sort_by=rating';
   fetch(url)
     .then(res => res.json())
     .then(json => console.log(json))
     .catch(err => console.log(err));
     */
    return Axios.get(apiUrl)
      .then(json => json.data.data.movies)
      .catch(error => {
        console.log(error);
      })
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

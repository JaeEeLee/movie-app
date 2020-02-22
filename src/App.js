import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  /**
   * state가 바뀔때마다 render 발생
   * 
   */
  state = {
  }

  componentDidMount(){
   setTimeout(() => { 
      this.setState({
        movies : [
          {
            title: "기생충",
            poster: "/src/images/gisaengchong.jpg"
          },
          {
            title: "시동",
            poster: "/src/images/sidong.jpg"
          },
          {
            title: "Kingdom",
            poster: "/src/images/kingdom.jpg"
          },
          {
            title: "6 Underground",
            poster: "/src/images/6underground.jpg"
          },
          {
            title: "Harry Potter",
            poster: "/src/images/harrypotter.jpg"
          }
        ]
      })
   },2500)
  }

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

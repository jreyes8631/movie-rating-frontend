import React, { Component} from 'react';
import MovieList from '../components/MovieList';

export default class MoviesIndexContainer extends Component {

    state = {
     movies: [],
     loading: true
    }

    componentDidMount() {
     fetch('http://localhost:3001/movies', { 
         method: 'GET',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         }
     })

       .then(res => res.json())
       .then(moviesJson => {
        this.setState({
            movies: moviesJson,
            loading: false
        })
       })
    }

    render(){
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
               { this.state.loading ? 'Loading content' : < MovieList movies={this.state.movies}/>}
            </section>
        )
    }
}
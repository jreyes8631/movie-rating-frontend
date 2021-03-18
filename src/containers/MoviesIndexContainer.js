import React, { Component} from 'react';
import MovieList from '../components/MovieList';

export default class MoviesIndexContainer extends Component {

    state = {
     movies: [],
     loading: true
    }

    componentDidMount() {
     this.setState({
         movies: [
         {title: 'Black Phanter'}, 
         {title: 'Avengers: End game'}, 
         {title: 'The mommy'}],
         loading: false
     })
    }

    render(){
        return (
            <section className="max-w-6xl mx-auto mt-16">
               { this.state.loading ? 'Loading spinner' : < MovieList movies={this.state.movies}/>}
            </section>
        )
    }
}
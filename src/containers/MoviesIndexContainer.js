import React, { Component} from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/movies'
import MovieList from '../components/MovieList';

export class MoviesIndexContainer extends Component {



    componentDidMount() {
     this.props.DispatchfetchMovies();
    }

    render(){
        if (this.props.loadingState === 'notStarted'){
            return null
        }
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
               { this.props.loadingState === 'inProgress' ? (
                   'loading content') : (
                   <MovieList movies={this.props.movies}/>
                   
                   )} 
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      movies: state.movies.movieList,
      loadingState: state.movies.loadingState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      DispatchfetchMovies: () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndexContainer)
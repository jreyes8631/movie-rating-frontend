import React, { Component} from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/movies'
import MovieList from '../components/MovieList';

export class MoviesIndexContainer extends Component {

  state = {
    isSorted: false
  };

  handleClick = () =>{
    this.SetState({isSorted: !this.state.isSorted});
  }

  componentDidMount() {
     this.props.DispatchfetchMovies();
  } 

  render(){
    if (this.props.loadingState === 'notStarted'){
        return null
    }
    return (
        <>
        <button onClick={this.handleClick} className="inline-block border border-blue-500 rounded py-2 px-3 mt-6 bg-blue-500 text-white mx-0.5">Sort By Name</button>
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
            { this.props.loadingState === 'inProgress' ? (
                'loading content') : (
                  this.state.isSorted ?
           <MovieList movies={[...this.props.movies].sort((a, b) => {
               return a.title.localeCompare(b.title)
                })}/> : <MovieList movies={this.props.movies}/> )}

            </section>
      </> 
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
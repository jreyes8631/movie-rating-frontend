import React, { Component, Fragment} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {fetchMoviesById} from '../actions/movies'



export  class MovieShowContainer extends Component {

    

  componentDidMount(){
    const movieId = this.props.match.params.id
    this.props.dispatchFetchMovies(movieId)
  }
    

    render() {
        if (this.props.loadingState !== "successfull"){
            return <div>Loading content</div>
        }

        return (
            <>
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                <h1 >Title: {this.props.movie.title}</h1>
                <br></br>
                <h1>Genre: {this.props.movie.genre}</h1>
                <br></br>
                <h1>Classification: {this.props.movie.classification}</h1>
                <br></br>
                <h1>Duration: {this.props.movie.duration}</h1>
                <br></br>
                <h1>Release: {this.props.movie.release_date}</h1>
                <br></br>
                <h1>Director: {this.props.movie.director}</h1>
                <br></br>
                <h1>Description: {this.props.movie.description}</h1>
                <br></br>
               

            </section>
            <Link  className="inline-block border border-blue-500 rounded py-2 px-3 bg-blue-500 text-white mx-44" to={`/movies/${this.props.movie.id}/reviews/new`}>CREATE A REVIEW</Link>

            
            <div className="max-w-6xl w-11/12 mx-auto mt-16">
              {this.props.reviews.map((review) => {
               return(
                <React.Fragment key={review.id}>
                <h2>rating: {review.rating}</h2>
                <h3>comment: {review.comment}</h3>
                <br></br>
                </React.Fragment>
                )
              })
              
              }
             
              </div>
            <Link className="inline-block border border-blue-500 rounded py-2 px-3 bg-blue-500 text-white mx-44" to={`/`}>BACK</Link>
          </>
           
        );
    }
};

const mapStateToProps = (state, {match: {params} }) => {
  const movieId = params.id
  let loadingState = state.reviews.moviesLoaded[movieId] || "notSarted"
  return {
   movie: state.movies.movieList.find(movie => movie.id == movieId),
   reviews: state.reviews.reviewList.filter(review =>  review.movie_id == movieId),
   loadingState
  };

};

const mapDispatchToProps = (dispatch) => {
 return {
   dispatchFetchMovies: (movieId) => dispatch(fetchMoviesById(movieId))
 }
}

export default connect(mapStateToProps, mapDispatchToProps)
(MovieShowContainer)
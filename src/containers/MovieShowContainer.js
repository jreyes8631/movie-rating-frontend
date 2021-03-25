import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

export default class MovieShowContainer extends Component {

    state = {
        movie: {},
        reviews: [],
        loading: true
    }

  componentDidMount(){
    const MovieId = this.props.match.params.id
    fetch(`http://localhost:3001/movies/${MovieId}`)
    .then (res => res.json())
    .then(({movie, reviews}) => {
        this.setState({
            movie,
            reviews,
            loading: false
        })
    })
  }
    

    render() {
        if (this.state.loading){
            return <div>Loading content</div>
        }

        return (
            <>
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                <h1 >Title: {this.state.movie.title}</h1>
                <br></br>
                <h1>Genre: {this.state.movie.genre}</h1>
                <br></br>
                <h1>Classification: {this.state.movie.classification}</h1>
                <br></br>
                <h1>Duration: {this.state.movie.duration}</h1>
                <br></br>
                <h1>Release: {this.state.movie.release_date}</h1>
                <br></br>
                <h1>Director: {this.state.movie.director}</h1>
                <br></br>
                <h1>Description: {this.state.movie.description}</h1>
                <br></br>
               

            </section>
            <button className="inline-block border border-blue-500 rounded py-2 px-3 bg-blue-500 text-white mx-44" type="button"><Link to={`/movies/${this.state.movie.id}/reviews/new`}>CREATE A REVIEW</Link></button>

            
            <div className="max-w-6xl w-11/12 mx-auto mt-16">
              {this.state.reviews.map((review) => {
               return(
                <React.Fragment key={review.id}>
                <h2>rating: {review.rating}</h2>
                <h3>review: {review.comment}</h3>
                <br></br>
                </React.Fragment>
                )
              })
              
              }
             
              </div>
            <button className="inline-block border border-blue-500 rounded py-2 px-3 bg-blue-500 text-white mx-44" type="button"><Link to={`/`}>BACK</Link></button>
          </>
           
        );
    }
}
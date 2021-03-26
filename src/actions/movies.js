import { 
    START_LOADING_MOVIES,
    SUCCESSFULLY_LOADED_MOVIES,
    START_LOADING_MOVIE,
    SUCCESSFULLY_LOADED_MOVIE_REVIEWS
    
} from './index'


export  const fetchMovies = () =>{
    return(dispatch) =>{
        dispatch({type: START_LOADING_MOVIES})
         fetch('http://localhost:3001/movies', { 
         method: 'GET',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         }
     })

       .then(res => res.json())
       .then(moviesJson => {
        dispatch({type: SUCCESSFULLY_LOADED_MOVIES,
            payload: moviesJson
        
        })
       });
    }
}

export  const fetchMoviesById = (movieId) =>{
    return(dispatch) =>{
        dispatch({type: START_LOADING_MOVIE, payload: movieId})

        fetch(`http://localhost:3001/movies/${movieId}`)
        .then (res => res.json())
        .then((movieReviewsJson) => {
           dispatch({type: SUCCESSFULLY_LOADED_MOVIE_REVIEWS,
            payload: movieReviewsJson,
        })
        });
    }
}
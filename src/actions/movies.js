import { 
    START_LOADING_MOVIES,
    SUCCESSFULLY_LOADED_MOVIES,
    START_LOADING_MOVIE,
    SUCCESSFULLY_LOADED_MOVIE_REVIEWS,
    SUCCESSFULLY_CREATED_MOVIE
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

export const createMovie = (formData) =>{
    return(dispatch) =>{
        return fetch('http://localhost:3001/movies', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({movie: formData})
        })
        .then(res => {
           if (res.ok) {
            return res.json()
           } else {
            return res.json().then(errors => Promise.reject(errors))
           }
        })
            
        .then(movieJson => {
            dispatch({
                type: SUCCESSFULLY_CREATED_MOVIE,
                payload: movieJson,
            });
        })

       
    }
}
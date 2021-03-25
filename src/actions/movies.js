import { 
    START_LOADING_MOVIES,
    SUCCESSFULLY_LOADED_MOVIES
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
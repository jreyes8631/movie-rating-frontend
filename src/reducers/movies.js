import { 
  
  START_LOADING_MOVIES,
  SUCCESSFULLY_LOADED_MOVIES,
  SUCCESSFULLY_LOADED_MOVIE_REVIEWS,
  SUCCESSFULLY_CREATED_MOVIE,
  ERROR_CREATING_MOVIE
  
  
} from '../actions';

const initialState = {
    LoadingState: "notStarted",
    movieList: []
}

export default function MoviesReducer(state = initialState, 
    action) {
   switch (action.type) {
      case START_LOADING_MOVIES:

       return {...state, LoadingState: 'inProgress'}
      
      case SUCCESSFULLY_LOADED_MOVIES:

        return {
          movieList: action.payload, 
          LoadingState: 'Successfull'
        };

      case SUCCESSFULLY_LOADED_MOVIE_REVIEWS:
        const foundMovie = state.movieList.find(movie => movie.id === action.payload.movie.id)
        if(foundMovie) {
          return state
          
        } else {
          return {
              ...state,
             movieList: state.movieList.concat(action.payload.movie),
            }
        }

      case SUCCESSFULLY_CREATED_MOVIE:
        return {
          ...state,
         movieList: state.movieList.concat(action.payload),
        }
     

      default:

     return state;
   }

}


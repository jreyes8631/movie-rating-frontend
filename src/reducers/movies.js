import { 
  ADD_MOVIE,
  START_LOADING_MOVIES,
  SUCCESSFULLY_LOADED_MOVIES,
  FAILED_LOADING_MOVIES
} from '../actions';

const initialState = {
    loadingState: "notStarted",
    movieList: []
}

export default function MoviesReducer(state = initialState, 
    action) {
   switch (action.type) {
      case START_LOADING_MOVIES:

       return {...state, loadingState: 'inProgress'}

      case SUCCESSFULLY_LOADED_MOVIES:

        return {
          movieList: action.payload, 
          loadingState: 'Successfull'}

      default:

     return state;
   }

}


import { 
    SUCCESSFULLY_LOADED_MOVIE_REVIEWS,
    START_LOADING_MOVIE
} from '../actions';

const initialState = {
    moviesLoaded: {},
    reviewList: []
};

export default function reviewsReducer(state = initialState, action) {

    switch (action.type) {

     case START_LOADING_MOVIE: {
        return {
        ...state,
        moviesLoaded: {...state.moviesLoaded, [action.payload]: "inProgress"}
        }
     }

     case SUCCESSFULLY_LOADED_MOVIE_REVIEWS:
         return {
          moviesLoaded: {
            ...state.moviesLoaded, 
            [action.payload.movie.id]: "successfull",
          },
          reviewList: state.reviewList.concat(action.payload.reviews)

         };
        default: 
        return state;
    }
}
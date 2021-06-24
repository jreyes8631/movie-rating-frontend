import { 
    SUCCESSFULLY_CREATED_REVIEW,
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
          reviewList: state.reviewList.filter(review => review.movie_id !== action.payload.movie.id).concat(action.payload.reviews)

         };
        
        case SUCCESSFULLY_CREATED_REVIEW:
            return {
                ...state,
                reviewList: state.reviewList.concat.apply(action.payload)
            }

        default: 
        return state;
    }
}
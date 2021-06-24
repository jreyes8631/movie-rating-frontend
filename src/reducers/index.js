import { combineReducers } from 'redux';
import moviesReducer from './movies';
import reviewsReducer from './reviews';

export default combineReducers({
    movies: moviesReducer,
    reviews: reviewsReducer,
})


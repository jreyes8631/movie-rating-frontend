import React from 'react';
import MovieListItem from './MovieListItem';

const MovieList = ({movies}) => {
    return (
        <>
        <h1>Movies:</h1>
        <br></br>
        <ul>
         {movies.map(movies => <MovieListItem key={movies.id} movie={movies}/>)}
        </ul>
        </>
    )
        
    
}

export default MovieList;
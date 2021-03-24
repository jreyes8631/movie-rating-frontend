import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = ({movie}) => {
 return(
    <li className="" key={movie.id}>
        <Link to={`/movies/${movie.id}`}>{movie.title} </Link>
    </li>
 );
        
}

export default MovieListItem;
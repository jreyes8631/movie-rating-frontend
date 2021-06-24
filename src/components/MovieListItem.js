import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = ({movie}) => {
 return(
    <li className="border-double border-4 border-light-blue-500 mt-4 shadow-lg px-4 py-6 mb-4 w-1/2" key={movie.id}>
        <Link to={`/movies/${movie.id}`}><span>{movie.title}</span></Link>
    </li>
 );
        
}

export default MovieListItem;
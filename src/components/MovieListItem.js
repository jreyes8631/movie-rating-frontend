import React from 'react';

const MovieListItem = ({movie}) => {
 return <li className="" key={movie.id}>{movie.title}</li>;
}

export default MovieListItem;
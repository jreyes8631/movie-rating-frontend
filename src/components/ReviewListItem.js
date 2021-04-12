import React from 'react';

const ReviewListItem = ({review}) => {
 return  <li className="border-double border-4 border-light-blue-500 mt-4 shadow-lg px-4 py-6 mb-4 w-1/2" 
 key={review.id}>{review.comment}</li>;
}

export default ReviewListItem;
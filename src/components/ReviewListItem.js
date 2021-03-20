import React from 'react';

const ReviewListItem = ({review}) => {
 return  <li className="" key={review.id}>{review.comment}</li>;
}

export default ReviewListItem;
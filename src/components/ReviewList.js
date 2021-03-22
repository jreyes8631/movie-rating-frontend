import React from 'react';
import ReviewListItem from './ReviewListItem';

const ReviewList = ({reviews}) => {
  return (
     <>
     <h1>Reviews:</h1>
     <br></br>
        <ul>
         {reviews.map(review => <ReviewListItem key={review.id} review={review}/>)}
        </ul>
     </>
  )
}

export default ReviewList;
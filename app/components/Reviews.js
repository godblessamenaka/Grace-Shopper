import React from 'react'

function Reviews (props){
  const reviews = props.reviews;
  return (
    <div>
      {
        reviews && reviews.map(review => (
          <div className="col-xs-4" key={review.id}>
              <h5>
                <span>{ review.rating }</span>
              </h5>
              <h5>
                <span>{ review.title }</span>
              </h5>
              <h5>
                <span>{ review.body }</span>
              </h5>
          </div>
      ))}
    </div>
  );
}

export default Reviews;

import React from 'react'

function Reviews (props){
  const reviews = props.reviews;
  function makeStars(rating){
    let stars = [];
    for (let i = 1; i <= 5; i++){
      if (i <= rating) stars.push(<span key = {i} className="glyphicon glyphicon-star" />)
      else stars.push(<span  key = {i} className="glyphicon glyphicon-star-empty" />)
    }
    return stars
  }
  return (
    <div>
      {
        reviews && reviews.map(review => (
          <div key={review.id}>
              <h5>
                <span>{ makeStars(review.rating) }</span>
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

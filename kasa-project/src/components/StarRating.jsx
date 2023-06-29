// eslint-disable-next-line react/prop-types
export const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fa fa-star">X</i>);
  }

  if (halfStar) {
    stars.push(<i key="half" className="fa fa-star-half">X</i>);
  }

  return <div className="star-rating">{stars}</div>;
};

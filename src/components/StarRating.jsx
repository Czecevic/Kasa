// eslint-disable-next-line react/prop-types
export const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <span key={i} className="arrow-size">
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} style={{ color: "#E3E3E3" }} className="arrow-size">
          ★
        </span>
      );
    }
  }

  return <div className="star-rating">{stars}</div>;
};

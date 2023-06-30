import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }

  if (halfStar) {
    stars.push(<FontAwesomeIcon icon={faStar} />);
  }

  return <div className="star-rating">{stars}</div>;
};

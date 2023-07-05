import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<span className="arrow-size">&#10029;</span>);
    } else {
      stars.push(
        <span style={{ color: "#E3E3E3" }} className="arrow-size">
          &#10029;
        </span>
      );
    }
  }

  return <div className="star-rating">{stars}</div>;
};

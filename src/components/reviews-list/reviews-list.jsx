import React, {PureComponent} from "react";
import ReviewItem from "../review-item/review-item.jsx";
import PropTypes from "prop-types";

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {review} = this.props;
    return (
      <ul className="reviews__list">
        {review.map((it, id) => <ReviewItem key = {id + it.author} item = {it}/>)}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  review: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        avatar: PropTypes.shape({
          src: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired
        }),
        rate: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
  ).isRequired
};

export default ReviewsList;

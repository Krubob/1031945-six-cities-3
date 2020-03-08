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
        {review.usersReviewsArr.map((it, id) => <ReviewItem key = {id + it.author} item = {it}/>)}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    usersReviewsArr: PropTypes.arrayOf(ReviewItem.propTypes.item)
  })
};

export default ReviewsList;

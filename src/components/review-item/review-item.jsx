import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class ReviewItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props;
    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img
              className="reviews__avatar user__avatar"
              src={item.avatar.src}
              width="54"
              height="54"
              alt={item.avatar.alt}
            />
          </div>
          <span className="reviews__user-name">{item.author}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: item.rate}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {item.text}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">
            {item.date}
          </time>
        </div>
      </li>
    );
  }
}

ReviewItem.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }),
    rate: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })
};

export default ReviewItem;

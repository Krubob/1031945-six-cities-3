import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class OfferCard extends PureComponent {
  constructor(props) {
    super(props);

  }
  render() {
    const {onOfferHover, offer, onOfferClick} = this.props;

    return (
      <article className="cities__place-card place-card"
        onMouseOver={() => {
          onOfferHover(offer.name);
        }}>
        <div className="place-card__mark">
          <span>{offer.mark}</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.image} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: offer.rate + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name"
            onClick={() => {
              onOfferClick(offer.id);
            }}>
            <a href="#">{offer.name}</a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    );
  }
}

OfferCard.propTypes = {
  onOfferHover: PropTypes.func,
  onOfferClick: PropTypes.func,
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired
        }).isRequired
    ),
    name: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    devices: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      super: PropTypes.string.isRequired
    }).isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
  })
};

export default OfferCard;



import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Reviews from "../reviews/reviews.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import OfferCard from "../offer-card/offer-card.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";

class OfferDetailed extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, review, offers} = this.props;
    const nearPins = offer.nearOffers.map((it) => it.coordinates);
    const sameOffers = offer.nearOffers.map((it) => offers.find((el) => el.id === it.id));

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"
                  />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a
                      className="header__nav-link header__nav-link--profile"
                      href="#"
                    >
                      <div
                        className="header__avatar-wrapper user__avatar-wrapper"
                      ></div>
                      <span className="header__user-name user__name"
                      >Oliver.conner@gmail.com</span
                      >
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.photos.map((it, i) => (
                  <div key={it.alt + i} className="property__image-wrapper">
                    <img
                      className="property__image"
                      src={it.src}
                      alt={it.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  <span>{offer.mark}</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.name}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: offer.rate + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rate}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                  Max {offer.guests} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.devices.map((it, id) => (
                      <li key={it + id} className="property__inside-item">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div
                      className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper"
                    >
                      <img
                        className="property__avatar user__avatar"
                        src={offer.owner.avatar}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {offer.owner.username}
                    </span>
                  </div>
                  <div className="property__description">
                    {offer.description.map((it, id) => (
                      <p key={it + id} className="property__text">
                        {it}
                      </p>
                    ))}
                  </div>
                </div>
                {<Reviews review = {review}/>}
              </div>
            </div>
            {<Map pins = {nearPins} nearMap = {true} offers = {offers}/>}
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
              Other places in the neighbourhood
              </h2>
              {<OffersList offerDetail = {true} offers = {sameOffers}/>}
            </section>
          </div>
        </main>
      </div>
    );
  }
}

OfferDetailed.propTypes = {
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
    coordinates: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired,
    nearOffers: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          coordinates: PropTypes.arrayOf(
              PropTypes.number.isRequired
          ).isRequired
        }).isRequired
    ).isRequired,
  }),
  review: ReviewsList.propTypes.review,
  offers: PropTypes.arrayOf(OfferCard.propTypes.offer),
};

export default OfferDetailed;

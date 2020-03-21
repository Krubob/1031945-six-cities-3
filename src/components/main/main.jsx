import React, {PureComponent} from "react";
import OffersList from "../offers-list/offers-list.jsx";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";
import Map from "../map/map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, onOfferClick, onChangeCity, getCityOffers} = this.props;
    const pins = offers.map((it) => it.coordinates);

    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
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
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CitiesList
            onChangeCity={onChangeCity}
            getCityOffers={getCityOffers}
          />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {` `}
                  312 places to stay in Amsterdam
                </b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li
                      className="places__option places__option--active"
                      tabIndex="0"
                    >
                      Popular
                    </li>
                    <li className="places__option" tabIndex="0">
                      Price: low to high
                    </li>
                    <li className="places__option" tabIndex="0">
                      Price: high to low
                    </li>
                    <li className="places__option" tabIndex="0">
                      Top rated first
                    </li>
                  </ul>

                  {/* <select class="places__sorting-type" id="places-sorting">
              <option class="places__option" value="popular" selected="">Popular</option>
              <option class="places__option" value="to-high">Price: low to high</option>
              <option class="places__option" value="to-low">Price: high to low</option>
              <option class="places__option" value="top-rated">Top rated first</option>
            </select> */}
                </form>
                {<OffersList onOfferClick={onOfferClick} offers={offers} />}
              </section>
              <div className="cities__right-section">
                <Map pins={pins} offers={offers} />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  offers: PropTypes.arrayOf(OfferCard.propTypes.offer),
  onOfferClick: PropTypes.func,
  getCityOffers: PropTypes.func.isRequired,
  onChangeCity: PropTypes.func.isRequired
};

export default Main;

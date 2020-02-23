import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOfferName: null
    };
    this.handleOfferHover = this.handleOfferHover.bind(this);
  }

  handleOfferHover(name = null) {
    this.setState({
      activeOfferName: name
    });
  }

  render() {
    const {offers, onOfferClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((it) => (
          <OfferCard key={it.name} offer={it} onOfferHover={this.handleOfferHover} onOfferClick={onOfferClick}/>
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  handleOfferHover: PropTypes.func,
  onOfferClick: PropTypes.func,
  offers: PropTypes.arrayOf(OfferCard.propTypes.offer)
};

export default OffersList;

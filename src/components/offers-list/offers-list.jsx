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
      <div className={`${this.props.offerDetail ? `near-places__list` : `cities__places-list tabs__content`} places__list`}>
        {offers.map((it) => (
          <OfferCard key={it.name} offer={it} onOfferHover={this.handleOfferHover} onOfferClick={onOfferClick} offerDetail = {this.props.offerDetail}/>
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  handleOfferHover: PropTypes.func,
  onOfferClick: PropTypes.func,
  offers: PropTypes.arrayOf(OfferCard.propTypes.offer),
  offerDetail: PropTypes.bool
};

export default OffersList;

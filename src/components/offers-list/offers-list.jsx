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
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((it) => (
          <OfferCard key={it.name} offers={it} handleOfferHover={this.handleOfferHover}/>
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  handleOfferHover: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })).isRequired,
};

export default OffersList;

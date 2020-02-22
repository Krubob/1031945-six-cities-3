import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

const onTitleButtonClick = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;

    return (
      <Main offers={offers} onTitleButtonClick={onTitleButtonClick}/>
    );
  }
}

App.propTypes = {
  onTitleButtonClick: PropTypes.func,
  offers: PropTypes.arrayOf(OfferCard.propTypes.offer)
};

export default App;

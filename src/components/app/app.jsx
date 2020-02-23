import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import OffersDetailed from "../offers-detailed/offers-detailed.jsx";
import OfferCard from "../offer-card/offer-card.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleOfferClick = this.handleOfferClick.bind(this);
    this.state = {
      activeOfferId: null
    };
  }

  handleOfferClick(id = null) {
    this.setState({
      activeOfferId: id
    });
  }

  renderMain() {
    const {offers} = this.props;
    const {activeOfferId} = this.state;

    if (activeOfferId === null) {
      return (
        <Main offers = {offers} onOfferClick = {this.handleOfferClick}></Main>
      );
    } else {
      const offerDetailed = offers.find((it) => it.id === activeOfferId);
      return (
        <OffersDetailed offerDetailed = {offerDetailed}/>
      );
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = "/">
            {this.renderMain()}
          </Route>
          <Route exact path = "/offers-detailed">
            <OffersDetailed />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  onOfferClick: PropTypes.func,
  offers: PropTypes.arrayOf(OfferCard.propTypes.offer)
};

export default App;

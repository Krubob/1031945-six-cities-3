import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import OfferDetailed from "../offer-detailed/offer-detailed.jsx";
import OfferCard from "../offer-card/offer-card.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
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
    const {offers, reviews} = this.props;
    const {activeOfferId} = this.state;

    if (activeOfferId === null) {
      return (
        <Main offers = {offers} onOfferClick = {this.handleOfferClick} />
      );
    } else {
      const offerDetailed = offers.find((it) => it.id === activeOfferId);
      const reviewItem = reviews.find((it) => it.id === activeOfferId);
      return (
        <OfferDetailed review = {reviewItem} offer = {offerDetailed} offers = {offers}/>
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
            <OfferDetailed />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  onOfferClick: PropTypes.func,
  offers: PropTypes.arrayOf(OfferCard.propTypes.offer),
  reviews: PropTypes.arrayOf(ReviewsList.propTypes.review)
};

export default App;

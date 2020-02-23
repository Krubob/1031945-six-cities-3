import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";
import offers from "../../mocks/offers.js";

it(`Render OfferCard component`, () => {
  const tree = renderer
    .create(<OfferCard
      offer={offers[0]}
      handleOfferHover={() => {}}
      onOfferClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offers-list.jsx";
import offers from "../../mocks/offers.js";

it(`Render OfferList component`, () => {
  const tree = renderer
    .create(
        <OfferList onOfferClick={() => {}} offers={offers} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

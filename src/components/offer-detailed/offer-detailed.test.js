import React from "react";
import renderer from "react-test-renderer";
import OfferDetailed from "./offer-detailed.jsx";
import offers from "../../mocks/offers.js";
import reviews from "../../mocks/reviews";

it(`Render OfferDetail component`, () => {
  const tree = renderer
    .create(
        <OfferDetailed offer={offers[0]} review={reviews[0]} offers = {offers}/>, {
          createNodeMock: () => {
            return document.createElement(`section`);
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

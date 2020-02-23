import React from "react";
import renderer from "react-test-renderer";
import OfferDetailed from "./offer-detailed.jsx";
import offers from "../../mocks/offers.js";
import {BrowserRouter} from "react-router-dom";

it(`Render OfferDetail component`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <OfferDetailed offer={offers[0]} />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

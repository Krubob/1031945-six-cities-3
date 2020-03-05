import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import offers from "../../mocks/offers.js";

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      offers={offers}
      onOfferClick={() => {}}
    />, {
      createNodeMock: () => {
        return document.createElement(`section`);
      }
    })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

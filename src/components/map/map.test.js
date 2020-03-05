import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import offers from "../../mocks/offers.js";

it(`Render Map`, () => {
  const tree = renderer
    .create(<Map
      offers={offers}
    />, {
      createNodeMock: () => {
        return document.createElement(`section`);
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

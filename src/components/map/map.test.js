import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import offers from "../../mocks/offers.js";

const pins = offers.map((it) => it.coordinates);

it(`Render Map`, () => {
  const tree = renderer
    .create(<Map
      pins={pins}
      offers={offers}
    />, {
      createNodeMock: () => {
        return document.createElement(`section`);
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const Settings = {
  PLACES_COUNT: 312
};
const placesNames = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      placesCount={Settings.PLACES_COUNT}
      placesNames={placesNames}
      onTitleButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

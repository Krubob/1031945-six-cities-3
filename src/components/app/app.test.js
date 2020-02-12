import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Settings = {
  PLACES_COUNT: 312
};
const placesNames = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      placesCount={Settings.PLACES_COUNT}
      placesNames={placesNames}
      onTitleButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

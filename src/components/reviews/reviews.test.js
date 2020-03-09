import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews.jsx";
import reviews from "../../mocks/reviews";

it(`Render ReviewsList component`, () => {
  const tree = renderer
    .create(
        <Reviews review = {reviews[0]}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

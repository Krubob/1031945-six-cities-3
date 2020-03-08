import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";
import reviews from "../../mocks/reviews";

it(`Render ReviewsList component`, () => {
  const tree = renderer
    .create(
        <ReviewsList review = {reviews[0]}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

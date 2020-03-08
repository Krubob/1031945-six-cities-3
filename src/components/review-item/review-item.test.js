import React from "react";
import renderer from "react-test-renderer";
import ReviewItem from "./review-item.jsx";
import reviews from "../../mocks/reviews";

it(`Render ReviewItem component`, () => {
  const tree = renderer
    .create(
        <ReviewItem item = {reviews[0].usersReviewsArr[0]}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

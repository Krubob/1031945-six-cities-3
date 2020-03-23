import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import offers from "../../mocks/offers.js";
import reviews from "../../mocks/reviews.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    offers,
    reviews
  });

  const tree = renderer
    .create(
        <Provider store = {store}>
          <App activeId = {offers[0].id} />
        </Provider>, {
          createNodeMock: () => {
            return document.createElement(`section`);
          }
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card.jsx";
import offers from "../../mocks/offers.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Test OfferCard hover`, () => {
  const onHoverArticle = jest.fn((data) => data);

  const article = shallow(
      <OfferCard
        offer={offers[0]}
        onOfferHover={() => {
          onHoverArticle(offers.name);
        }}
      />
  );

  article.simulate(`mouseover`);

  expect(onHoverArticle.mock.calls[0][0]).toBe(offers.name);
});

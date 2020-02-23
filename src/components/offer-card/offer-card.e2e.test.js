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
        onOfferClick={() => {}}
        onOfferHover={() => {
          onHoverArticle(offers.id);
        }}
      />
  );
  article.simulate(`mouseover`);

  expect(onHoverArticle.mock.calls[0][0]).toBe(offers.id);
});

it(`Test OfferCard title click`, () => {
  const onClickArticleName = jest.fn((data) => data);

  const article = shallow(
      <OfferCard
        offer={offers[0]}
        onOfferClick={() => {
          onClickArticleName(offers.id);
        }}
        handleOfferHover={() => {}}
      />
  );
  const articleName = article.find(`.place-card__name`);
  articleName.simulate(`click`);

  expect(onClickArticleName.mock.calls[0][0]).toBe(offers.id);
});


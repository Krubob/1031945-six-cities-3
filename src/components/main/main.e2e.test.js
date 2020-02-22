import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import offers from "../../mocks/offers.js";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`on title click`, () => {
  const onTitleButtonClick = jest.fn();

  const main = shallow(
      <Main
        offers={offers}
        onTitleButtonClick={onTitleButtonClick}
      />
  );

  const titleButton = main.find(`.header__logo-link`);

  titleButton.props().onClick();

  expect(onTitleButtonClick).toHaveBeenCalled();
});

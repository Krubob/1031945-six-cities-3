import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

const Settings = {
  PLACES_COUNT: 312
};
const placesNames = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

it(`Should title button be pressed`, () => {
  const onTitleButtonClick = jest.fn();

  const main = shallow(
      <Main
        placesCount={Settings.PLACES_COUNT}
        placesNames={placesNames}
        onTitleButtonClick={onTitleButtonClick}
      />
  );

  const titleButton = main.find(`.header__logo-link`);

  titleButton.props().onClick();

  expect(onTitleButtonClick).toHaveBeenCalled();
});

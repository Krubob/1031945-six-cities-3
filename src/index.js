import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  PLACES_COUNT: 312,
};
const placesNames = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

ReactDOM.render(
    <App
      placesCount={Settings.PLACES_COUNT}
      placesNames={placesNames}
    />,
    document.querySelector(`#root`)
);


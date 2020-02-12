import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({placesCount, placesNames}) => {

  return (
    <Main placesCount={placesCount}
      placesNames={placesNames}
    />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  placesNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;

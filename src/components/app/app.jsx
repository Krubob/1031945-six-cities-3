import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({placesCount, placesNames, onTitleButtonClick}) => {

  return (
    <Main placesCount={placesCount}
      placesNames={placesNames}
      onTitleButtonClick={onTitleButtonClick}
    />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  placesNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTitleButtonClick: PropTypes.func.isRequired
};

export default App;

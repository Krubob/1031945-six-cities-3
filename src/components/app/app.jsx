import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const onTitleButtonClick = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;

    return (
      <Main offers={offers} onTitleButtonClick={onTitleButtonClick}/>
    );
  }
}

App.propTypes = {
  onTitleButtonClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;

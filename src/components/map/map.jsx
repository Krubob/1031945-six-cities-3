import React, {PureComponent, createRef} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._map = createRef();
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this._zoom = 12;
  }

  componentDidMount() {
    const {pins} = this.props;
    const city = this.props.offers[0].city;

    const map = leaflet.map(this._map.current, {
      center: city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, this._zoom);

    leaflet
  .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  })
  .addTo(map);

    pins.forEach((pin) => {
      leaflet
        .marker(pin, this._icon)
        .addTo(map);
    });
  }

  render() {
    return (
      <section ref={this._map} className={`${this.props.nearMap ? `property__map` : `cities__map`} map`}/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferCard.propTypes.offer),
  pins: PropTypes.arrayOf(
      PropTypes.arrayOf(
          PropTypes.number.isRequired
      ).isRequired
  ).isRequired,
  nearMap: PropTypes.bool
};

export default Map;

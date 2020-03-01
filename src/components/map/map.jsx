import React, {PureComponent, createRef} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

const zoom = 12;
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._map = createRef();
  }

  componentDidMount() {
    const {offers} = this.props;
    const city = this.props.offers[0].city;

    const map = leaflet.map(this._map.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
  .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  })
  .addTo(map);

    offers.map((offer) => (
      leaflet
      .marker(offer.coordinates, {icon})
      .addTo(map)
    ));
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}} ref={this._map}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferCard.propTypes.offer)
};

export default Map;

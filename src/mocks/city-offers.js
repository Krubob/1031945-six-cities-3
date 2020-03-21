import offers from "./offers.js";
import cityParisOffers from "./city-paris-offers.js";

const cityOffers = {
  "Paris": cityParisOffers,
  "Cologne": offers,
  "Brussels": offers,
  "Amsterdam": offers,
  "Hamburg": offers,
  "Dusseldorf": offers
};

export default cityOffers;

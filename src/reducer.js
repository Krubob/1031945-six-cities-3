import cityOffers from "./mocks/city-offers.js";
import reviews from "./mocks/reviews.js";
import {extend} from "./utils.js";

const initialCity = Object.keys(cityOffers)[0];
const initialCityOffers = cityOffers[initialCity];
const initialCityOffersDetailed = cityOffers[initialCity];

const initialState = {
  city: initialCity,
  offers: initialCityOffers,
  offersDetailed: initialCityOffersDetailed,
  reviews
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`,
  GET_CITY_OFFERS_DETAILED: `GET_CITY_OFFERS_DETAILED`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  getCityOffers: (city) => ({
    type: ActionType.GET_CITY_OFFERS,
    payload: cityOffers[city]
  }),

  getCityOffersDetailed: (city) => ({
    type: ActionType.GET_CITY_OFFERS_DETAILED,
    payload: cityOffers[city]
  })
};

const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.GET_CITY_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.GET_CITY_OFFERS_DETAILED:
      return extend(state, {offersDetailed: action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator};

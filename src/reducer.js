import cityOffers from "./mocks/city-offers";
import reviews from "./mocks/reviews";
import {extend} from "./utils.js";
// import cityOffersDetailed from "./mock/city-offers-detailed";

const initialCity = Object.keys(cityOffers)[0];
const initialCityOffers = cityOffers[initialCity];
// const initialCityOffersDetailed = cityOffersDetailed[initialCity];

const initialState = {
  city: initialCity,
  offers: initialCityOffers,
  reviews
  // offersDetailed: initialCityOffersDetailed,
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

  // getCityOffersDetailed: (city) => ({
  //   type: ActionType.GET_CITY_OFFERS_DETAILED,
  //   payload: cityOffersDetailed[city]
  // })
};

const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.GET_CITY_OFFERS:
      return extend(state, {offers: action.payload});
    // case ActionType.GET_CITY_OFFERS_DETAIL:
    //   return extend(state, {offersDetail: action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator};

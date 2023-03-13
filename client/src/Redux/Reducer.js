import {
  GET_RACES,
  GET_RACE_ID,
  GET_BY_NAME,
  GET_TEMPERAMENTS,
  ORDER_BY_TEMPERAMENT,
  ORDER_BY_RACE,
  FILTER_DB,
  FILTER_API,
  ORDER_BY_WEIGHT,
  ORDER_BY_NAME,
  PESO_MIN,
} from "./Actions.js";

const initialState = {
  races: [],
  raceDetail: {},
  temperaments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RACES:
      return {
        ...state,
        races: action.payload,
      };
    case GET_RACE_ID:
      return {
        ...state,
        raceDetail: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        races: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case ORDER_BY_TEMPERAMENT:
      return {
        ...state,
        races: action.payload,
      };
    case ORDER_BY_RACE:
      return {
        ...state,
        races: action.payload,
      };
    case FILTER_DB:
      return {
        ...state,
        races: action.payload,
      };
    case FILTER_API:
      return {
        ...state,
        races: action.payload,
      };
    case PESO_MIN:
      return {
        ...state,
        races: action.payload,
      };

    //**********************************************

    case ORDER_BY_NAME:
      let sort =
        action.payload === "A-z"
          ? state.races.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : state.races.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            });
      return {
        ...state,
        races: sort,
      };

    // **********************************************

    case ORDER_BY_WEIGHT:
      let sortWeigth =
        action.payload === "weight max"
          ? state.races.sort((a, b) => {
              return b.weight_max - a.weight_max;
            })
          : state.races.sort((a, b) => {
              return a.weight_min - b.weight_min;
            });
      // console.log(sortWeigth)
      return {
        ...state,
        races: sortWeigth,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;

import axios from "axios";

export const GET_RACES = "GET_RACES";
export const GET_RACE_ID = "GET_RACE_ID";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const ORDER_BY_TEMPERAMENT = "ORDER_BY_TEMPERAMENT";
export const ORDER_BY_RACE = "ORDER_BY_RACE";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const FILTER_DB = "FILTER_DB";
export const FILTER_API = "FILTER_API";
export const PESO_MIN = "PESO_MIN";

export const getRaces = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3001/dogs`)
      .then((res) => dispatch({ type: GET_RACES, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const getRaceById = (id) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3001/dogs/${id}`)
      .then((res) => dispatch({ type: GET_RACE_ID, payload: res.data[0] }))
      .catch((error) => console.error(error));
  };
};

export const getByName = (name) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3001/dogs?race=${name}`)
      .then((res) => dispatch({ type: GET_BY_NAME, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const getTemperaments = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3001/temperaments`)
      .then((res) => dispatch({ type: GET_TEMPERAMENTS, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const orderByTemperament = (payload) => ({
  type: ORDER_BY_TEMPERAMENT,
  payload,
});

export const orderByRace = (payload) => ({
  type: ORDER_BY_RACE,
  payload,
});

export const filterDB = (payload) => ({
  type: FILTER_DB,
  payload,
});

export const filterAPI = (payload) => ({
  type: FILTER_API,
  payload,
});

export const orderByWeight = (payload) => ({
  type: ORDER_BY_WEIGHT,
  payload,
});

export const orderByName = (payload) => ({
  type: ORDER_BY_NAME,
  payload,
});

export const pesoMin = (payload) => ({
  type: PESO_MIN,
  payload,
});

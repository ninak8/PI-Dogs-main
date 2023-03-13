import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./Reducer.js";
import thunkMiddleware from "redux-thunk"; //permite devolver actions, func, y trabajar con el manejo de actions async

const composeEnhancen = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //agrega modificaciones al store (como los mdd)

const store = createStore(
  rootReducer,
  composeEnhancen(applyMiddleware(thunkMiddleware)) // me permite hacer las req 
);

export default store;

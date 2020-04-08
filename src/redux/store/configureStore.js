import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import reduxInmutableStateInvariant from "redux-immutable-state-invariant";

export default configureStore = (initialState) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //agrega soporte para redux dev tools
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxInmutableStateInvariant())) //nos avisa si mutamos el estado
  );
};

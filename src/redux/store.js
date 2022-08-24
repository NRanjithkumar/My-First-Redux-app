import {createStore , applyMiddleware, compose} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//taken from github


const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
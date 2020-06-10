import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "utils/history";
import counterReducer from './containers/ModulesTest/redux'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    auth: require("containers/App/Login/redux").reducer,
    counter: counterReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}

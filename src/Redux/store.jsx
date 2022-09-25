import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import {reducer as AppReducer} from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
const rootReducer=combineReducers({AppReducer,AuthReducer})
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export {store}
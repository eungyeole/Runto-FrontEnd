import { applyMiddleware, createStore } from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";
import reducer from "../reducers";
import logger from 'redux-logger'
const createStoreWidthMiddleware = applyMiddleware(
    promiseMiddlerware,
    reduxThunk,
    logger
)(createStore);
const store=createStoreWidthMiddleware(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;
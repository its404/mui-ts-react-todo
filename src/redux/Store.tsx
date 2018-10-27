import reducers from "app/redux/reducers/Reducers";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createBrowserHistory from "history/createBrowserHistory";
import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";

// Create a history
const history = createBrowserHistory();

// Create middlewares
const middlewares = [routerMiddleware(history)];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

// Create store
const store = createStore(
  connectRouter(history)(reducers),
  compose(applyMiddleware(...middlewares)),
);

const action = (type: any, payload: any) => store.dispatch({ type, payload });

// Export history and store
export { history, store, action };

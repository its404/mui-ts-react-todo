import { history, store } from "app/redux/Store";
import HomePage from "app/views/HomePage";
import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

export const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route path="/" component={HomePage} />
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

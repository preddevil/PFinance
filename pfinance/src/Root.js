import App from "./App";
import Login from "./components/Login";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const Root = () => {
  let store = configureStore();
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </Provider>
  );
};

export default Root;

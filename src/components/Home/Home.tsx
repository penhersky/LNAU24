import React from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./header/Header";
import Main from "./main/Main";

import {ToTop} from "../../fragments";
import {Page404} from "../";

import "./home.scss";

export default (props: any) => {
  return (
    <div className="home">
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <>
              <Header />
              <Main />
            </>
          )}
        />
        <Route path="*" component={Page404} />
      </Switch>
      <ToTop />
    </div>
  );
};

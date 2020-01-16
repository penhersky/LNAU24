import React from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./header/Header";
import Main from "./main/Main";

import {ToTop} from "../../fragments";

import "./home.scss";

export default (props: any) => {
  return (
    <div className="home">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <ToTop />
    </div>
  );
};

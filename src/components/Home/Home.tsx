import React from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./header/Header";

import "./home.scss";

export default (props: any) => {
  return (
    <div className="home">
      <Header />
      <Switch></Switch>
    </div>
  );
};

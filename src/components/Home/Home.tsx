import React from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./header/Header";
import Main from "./main/Main";

import AboutUs from "./aboutUs/AboutUs";
import Entrant from "./entrant/Entrant";
import Faculties from "./faculties/Faculties";
import News from "./news/News";

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
        <Route
          exact
          path="/about-us"
          component={() => (
            <>
              <Header />
              <AboutUs />
            </>
          )}
        />
        <Route
          exact
          path="/news"
          component={() => (
            <>
              <Header />
              <News />
            </>
          )}
        />
        <Route
          exact
          path="/faculties"
          component={() => (
            <>
              <Header />
              <Faculties />
            </>
          )}
        />
        <Route
          exact
          path="/to-the-entrant"
          component={() => (
            <>
              <Header />
              <Entrant />
            </>
          )}
        />
        <Route path="*" component={Page404} />
      </Switch>
      <ToTop />
    </div>
  );
};

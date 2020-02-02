import React from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./header/Header";
import Main from "./main/Main";

import AboutUs from "./aboutUs/AboutUs";
import Entrant from "./entrant/Entrant";
import Faculties from "./faculties/Faculties";
import News from "./news/News";

import {Footer} from "../../modules";
import {ToTop} from "../../fragments";
import {Page404} from "../";

import "./home.scss";

export default (props: any) => {
  return (
    <div className="home">
      <Switch>
        <Route exact path="/" component={Header} />
        <Route
          path={["/about-us", "/news", "/faculties", "/to-the-entrant"]}
          component={Header}
        />
      </Switch>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/news" component={News} />
        <Route exact path="/faculties" component={Faculties} />
        <Route exact path="/to-the-entrant" component={Entrant} />
        <Route path="*" component={Page404} />
      </Switch>
      <ToTop />
      <Footer />
    </div>
  );
};

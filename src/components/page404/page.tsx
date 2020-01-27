import React from "react";
import {NavLink} from "react-router-dom";

import "./page.scss";

export default (props: any) => {
  return (
    <div className="page404">
      <div className="pattern">
        <div className="face face1"></div>
        <div className="face face2"></div>
      </div>
      <div className="uk-overlay uk-position-bottom text">
        <h1>404</h1>
        <h6>Сторінку не знайдено!</h6>
        <p>OoЙ, Щось пішло не так(</p>
        <NavLink className="uk-button uk-button-secondary" to="/">
          На головгу
        </NavLink>
      </div>
    </div>
  );
};

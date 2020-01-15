import React from "react";
import {NavLink} from "react-router-dom";

import "./offCanvas.scss";

export default (props: {
  id: number;
  name: string;
  surname: string;
  status: string;
  Authorized: boolean;
}) => {
  return (
    <div id="offcanvas-nav" uk-offcanvas="mode: reveal; overlay: true">
      <span
        uk-icon="icon: close"
        className="uk-offcanvas-close"
        uk-close
      ></span>
      <div className="uk-offcanvas-bar">
        {props.Authorized ? (
          <NavLink to="api/login">Увійти</NavLink>
        ) : (
          <NavLink to={`/user/${props.id}`} className="uk-link-toggle">
            <div className="data">
              <h6 className="uk-link-heading">{`${props.name
                .split("")[0]
                .toUpperCase()}. ${props.surname}`}</h6>
              <p>{props.status}</p>
            </div>
          </NavLink>
        )}
        <ul className="uk-nav uk-nav-default">
          <li className="uk-nav-divider"></li>
          <li>
            <NavLink exact to="/">
              <span
                className="uk-margin-small-right"
                uk-icon="icon: thumbnails"
              ></span>{" "}
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us">
              <span
                className="uk-margin-small-right"
                uk-icon="icon: info"
              ></span>{" "}
              Про нас
            </NavLink>
          </li>
          <li>
            <NavLink to="/news">
              <span
                className="uk-margin-small-right"
                uk-icon="icon: social"
              ></span>{" "}
              Новини
            </NavLink>
          </li>
          <li>
            <NavLink to="/faculties">
              <span
                className="uk-margin-small-right"
                uk-icon="icon: users"
              ></span>{" "}
              Факультети
            </NavLink>
          </li>
          <li>
            <NavLink to="/to-the-entrant">
              <span
                className="uk-margin-small-right"
                uk-icon="icon: warning"
              ></span>{" "}
              Абітурієнту
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

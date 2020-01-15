import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/react-hooks";

import {UserHeader, OffCanvas} from "../../../modules";

import "./header.scss";
import {NavLink} from "react-router-dom";

export default (props: any) => {
  const [notAuthorized, setNotAuthorized] = useState(true);
  //const [getUser, {loading, data}]  = useQuery();
  return (
    <div>
      <div className="video-box uk-cover-container uk-height-large">
        <video
          uk-video="autoplay: inview"
          src="https://yootheme.com/site/images/media/yootheme-pro.mp4"
          muted
          uk-cover="true"
        ></video>
        <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 300">
          <nav
            className="uk-navbar-container uk-navbar-transparent nav-desk"
            delay-hide="false"
            uk-navbar="true"
            style={{position: "relative", zIndex: 980}}
          >
            <div className="uk-navbar-left">
              <NavLink
                className="uk-navbar-item uk-logo uk-margin-medium-left"
                to="/"
              >
                Logo
              </NavLink>
            </div>
            <div className="uk-navbar-left uk-margin-large-left">
              <ul className="uk-navbar-nav nav">
                <li>
                  <NavLink to="/">Головна</NavLink>
                </li>
                <li>
                  <NavLink to="/about-us">Про нас</NavLink>
                </li>
                <li>
                  <NavLink to="/news">Новини</NavLink>
                </li>
                <li>
                  <NavLink to="/faculties">Факультети</NavLink>
                </li>
                <li>
                  <NavLink to="/to-the-entrant">Абітурієнту</NavLink>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right uk-margin-large-right">
              {notAuthorized ? (
                <NavLink to="api/login">Увійти</NavLink>
              ) : (
                <UserHeader
                  name="Oleg"
                  surname="lohesvbnmjaklghjklj"
                  status="admin"
                  id={1}
                />
              )}
            </div>
          </nav>
          <nav
            className="uk-navbar uk-navbar-container nav-mobile"
            style={{position: "relative", zIndex: 980}}
          >
            <div className="uk-navbar-left">
              <span
                className="uk-navbar-toggle uk-margin-left"
                uk-navbar-toggle-icon="true"
                uk-toggle="target: #offcanvas-nav"
              >
                {}
              </span>
            </div>
          </nav>
        </div>
      </div>
      <OffCanvas
        name="Oleg"
        surname="lohesvbnmjaklghjklj"
        status="admin"
        id={1}
        Authorized={notAuthorized}
      />
    </div>
  );
};

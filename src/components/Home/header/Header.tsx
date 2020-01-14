import React from "react";

import {UserHeader} from "../../../modules";

import "./header.scss";
import {NavLink} from "react-router-dom";

export default (props: any) => {
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
            className="uk-navbar-container uk-navbar-transparent"
            delay-hide="false"
            uk-navbar="true"
            style={{position: "relative", zIndex: 980}}
          >
            <div className="uk-navbar-left">
              <a
                className="uk-navbar-item uk-logo uk-margin-medium-left"
                href="/"
              >
                Logo
              </a>
            </div>
            <div className="uk-navbar-center">
              <ul className="uk-navbar-nav nav">
                <li>
                  <a href="/">Active</a>
                </li>
                <li className="active">
                  <a href="/">Parent</a>
                </li>
                <li>
                  <a href="/">Item</a>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right uk-margin-large-right">
              <NavLink to="user/:id">
                <UserHeader name="Oleg" surname="lohes" status="admin" />
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

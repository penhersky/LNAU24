import React, {useState, useEffect} from "react";
import {useQuery} from "@apollo/react-hooks";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {UserHeader, OffCanvas} from "../../../modules";
import {Loading} from "../../../fragments";

import {USER_DATA_NAV_BAR} from "../../../type/authorizedUser";
import {SET_HEADER_USER_DATA} from "../../../constants/headerUserData";

import img from "./headerImg.png";

import "./header.scss";

export default (props: any) => {
  const [notAuthorized, setNotAuthorized] = useState(true);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    id: undefined,
    name: undefined,
    surname: undefined,
    position: undefined
  });
  const {data, loading} = useQuery(USER_DATA_NAV_BAR);

  useEffect(() => {
    if (data) {
      if (data.User.getAuthorizedUser.redirect) {
        setNotAuthorized(data.User.getAuthorizedUser.redirect);
      } else {
        setUser(data.User.getAuthorizedUser);
        setNotAuthorized(false);
        dispatch({
          type: SET_HEADER_USER_DATA,
          ...data.User.getAuthorizedUser
        });
      }
    }
  }, [data, dispatch]);

  return (
    <div>
      {loading ? <Loading /> : <></>}
      <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 200">
        <nav
          className="uk-navbar-container uk-navbar-transparent nav-desk"
          delay-hide="false"
          uk-navbar="true"
          style={{
            position: "relative",
            zIndex: 980
          }}
        >
          <div className="uk-navbar-left">
            <NavLink
              className="uk-navbar-item uk-logo uk-margin-medium-left"
              exact
              to="/"
            >
              <img
                data-src={img}
                width="45"
                height="50"
                alt=""
                uk-img=""
                className="header-logo"
              ></img>
              LNAU24
            </NavLink>
          </div>
          <div className="uk-navbar-left uk-margin-large-left">
            <ul className="uk-navbar-nav nav">
              <li>
                <NavLink exact to="/">
                  Головна
                </NavLink>
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
              <NavLink to="api/login">
                Увійти <span uk-icon="icon: sign-in"></span>
              </NavLink>
            ) : (
              <UserHeader
                name={String(user.name)}
                surname={String(user.surname)}
                status={String(user.position)}
                id={Number(user.id)}
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
      <OffCanvas
        name={String(user.name)}
        surname={String(user.surname)}
        status={String(user.position)}
        id={Number(user.id)}
        Authorized={notAuthorized}
      />
    </div>
  );
};

import React from "react";
import {NavLink} from "react-router-dom";

import "./userHeader.scss";

export default (props: {
  id: number;
  name: string;
  surname: string;
  status: string;
}) => {
  return (
    <NavLink to={`/user/${props.id}`} className="user uk-link-toggle">
      <span uk-icon="icon: user; ratio: 2.0" className="uk-link-heading"></span>
      <div className="data">
        <h6 className="uk-link-heading">{`${props.name
          .split("")[0]
          .toUpperCase()}. ${props.surname}`}</h6>
        <p>{props.status}</p>
      </div>
    </NavLink>
  );
};

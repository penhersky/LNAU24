import React from "react";

import "./userHeader.scss";

export default (props: {name: string; surname: string; status: string}) => {
  return (
    <div className="user">
      <span uk-icon="icon: user; ratio: 2.0"></span>
      <div className="data">
        <h6>{`${props.name.split("")[0].toUpperCase()}. ${props.surname}`}</h6>
        <p>{props.status}</p>
      </div>
    </div>
  );
};

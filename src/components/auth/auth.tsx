import React from "react";
import {Switch, Route} from "react-router-dom";
import REGISTER from "./register";

export default (props: any) => {
  return (
    <Switch>
      <Route path="/api/register" component={REGISTER} />
    </Switch>
  );
};

import React from "react";
import {Switch, Route} from "react-router-dom";
import REGISTER from "./register";
import FinishRegistration from "./finishRegistration";

export default (props: any) => {
  return (
    <Switch>
      <Route path="/api/register" component={REGISTER} />
      <Route
        path="/api/finishRegistration/:params"
        component={FinishRegistration}
      />
    </Switch>
  );
};

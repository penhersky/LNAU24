import React from "react";
import {Switch, Route} from "react-router-dom";
import REGISTER from "./register";
import FinishRegistration from "./finishRegistration";
import Login from "./login";
import ForgotPasswordFinish from "./forgotPasswordFinish";
import ForgotPasswordStart from "./forgotPasswordStart";

export default (props: any) => {
  return (
    <Switch>
      <Route path="/api/register" component={REGISTER} />
      <Route path="/api/login" component={Login} />
      <Route
        path="/api/finishRegistration/:params"
        component={FinishRegistration}
      />
      <Route path="/api/forgotPassword" component={ForgotPasswordStart} />
      <Route
        path="/api/forgotPasswordFinish"
        component={ForgotPasswordFinish}
      />
    </Switch>
  );
};

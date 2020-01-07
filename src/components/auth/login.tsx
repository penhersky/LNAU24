import React, {useState, useEffect} from "react";
import {NavLink, Redirect} from "react-router-dom";
import classNames from "classnames";
import {useLazyQuery} from "@apollo/react-hooks";

import {LOGIN} from "../../type/login";

import "./auth.scss";

export default (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, {loading, data}] = useLazyQuery(LOGIN);
  const [inputError, setInputError] = useState("");
  const [resultQuery, setResultQuery] = useState({error: "", message: ""});

  const onChangeEmail = (e: any) => setEmail(e.target.value);
  const onChangePassword = (e: any) => setPassword(e.target.value);

  const subminForm = (e: any) => {
    e.preventDefault();
    if (email && password) {
      login({variables: {email, password}});
    }
  };

  useEffect(() => {
    if (data) {
      if (data.login.error) {
        const error = data.login.error.split('"');
        setInputError(error[1]);
        setResultQuery({message: "", error: error[2]});
      }
      setResultQuery({message: data.login.message, error: ""});
      sessionStorage.setItem("mainToken", data.login.mainToken);
      sessionStorage.setItem("weeklyToken", data.login.weeklyToken);
      sessionStorage.setItem("dayToken", data.login.dayToken);
    }
  }, [data]);

  return (
    <div className="auth login">
      <div className="form-box form-box-login uk-text-center">
        <form
          className="uk-card uk-card-default uk-card-body uk-animation-scale-up"
          onSubmit={subminForm}
        >
          {loading ? <div uk-spinner="ratio: 1"></div> : ""}
          <h4> Увійти </h4>
          <p style={{color: "red"}}>
            {resultQuery.error ? resultQuery.error : ""}
          </p>
          {resultQuery.message ? <Redirect to="/" /> : ""}

          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1@m">
              <span className="uk-form-icon" uk-icon="icon: mail"></span>
              <input
                className={classNames(
                  "uk-input",
                  inputError === "email" ? "uk-form-danger" : ""
                )}
                type="email"
                placeholder="Email"
                value={email}
                onChange={onChangeEmail}
              />
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1@m">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input
                className={classNames(
                  "uk-input",
                  inputError === "password" ? "uk-form-danger" : ""
                )}
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={onChangePassword}
              />
            </div>
          </div>
          <button
            className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
            type="submit"
            disabled={loading}
          >
            Увійти
          </button>
          <p className="uk-link-muted">
            <NavLink to="/api/forgotPassword" className="uk-link-muted">
              Ви забули свій пароль?
            </NavLink>
          </p>
          <p className="uk-link-muted">
            <NavLink to="/api/register" className="uk-link-muted">
              Створити аккаунт?
            </NavLink>
          </p>
        </form>
      </div>
      <div className="information-login uk-animation-fade">
        <div className="content-auth">
          <img src="/images/login.png" className="img-login" alt="" />
          <p>Ми не тільки на вашому комп’ютері а ще й і на смартфоні! </p>
          <div className="stores">
            <div>
              <a
                href="https://www.microsoft.com/uk-ua/store/b/home"
                className="uk-animation-toggle"
              >
                <img
                  src="/images/microsoft.png"
                  className="uk-animation-shake"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                href="https://play.google.com/store"
                className="uk-animation-toggle"
              >
                <img
                  src="/images/google.png"
                  alt=""
                  className="uk-animation-shake"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

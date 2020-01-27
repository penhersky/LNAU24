import React, {useState, useEffect} from "react";
import classNames from "classnames";
import {useMutation} from "@apollo/react-hooks";
import {FORGOT_PASSWORD_FINISH} from "../../type/forgotPassword";

import "./auth.scss";

export default (props: any) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resultQuery, setResultQuery] = useState({error: "", message: ""});
  const [inputError, setInputError] = useState("");
  const [forgotPassword, {loading, data}] = useMutation(FORGOT_PASSWORD_FINISH);

  const onChangePassword = (e: any) => setPassword(e.target.value);
  const onChangeConfirmPassword = (e: any) =>
    setConfirmPassword(e.target.value);

  const subminForm = (e: any) => {
    e.preventDefault();
    if (!password && !confirmPassword) return;
    if (password === confirmPassword) {
      const paramsString = props.match.params.params;
      const searchParams = new URLSearchParams(paramsString);
      const key = searchParams.get("key");
      forgotPassword({variables: {key, password}});
    } else {
      setInputError("confirmPassword");
      setResultQuery({error: "Паролі не співпадають!", message: ""});
    }
  };
  useEffect(() => {
    if (data && data.forgotPasswordFinish) {
      setResultQuery(data.forgotPasswordFinish);
      if (data.forgotPasswordFinish.error) {
        setInputError("password");
      }
    }
  }, [data]);
  return (
    <div className="auth forgot-password">
      <div className="form-box form-box-forgot uk-text-center">
        <form
          className="uk-card uk-card-default uk-card-body uk-animation-scale-up"
          onSubmit={subminForm}
        >
          {loading ? <div uk-spinner="ratio: 1"></div> : ""}
          <p> Відновлення пароля </p>
          {resultQuery.error ? (
            <div className="uk-alert-danger" uk-alert="true">
              <span className="uk-alert-close" uk-close="true"></span>
              <p style={{margin: 0}}>{resultQuery.error}</p>
            </div>
          ) : (
            ""
          )}
          {resultQuery.message ? (
            <div className="uk-alert-success" uk-alert="true">
              <span className="uk-alert-close" uk-close="true"></span>
              <p style={{margin: 0}}>{resultQuery.message}</p>
            </div>
          ) : (
            ""
          )}
          <div className="uk-margin">
            <div className="uk-inline  uk-width-1-1@m">
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
          <div className="uk-margin">
            <div className="uk-inline  uk-width-1-1@m">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input
                className={classNames(
                  "uk-input",
                  inputError === "confirmPassword" ? "uk-form-danger" : ""
                )}
                type="password"
                placeholder="Пароловторіть пароль!"
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
              />
            </div>
          </div>
          <button
            className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
            type="submit"
            disabled={loading}
          >
            Надіслати
          </button>
        </form>
      </div>
      <div className="information information-forgot uk-animation-fade">
        <div className="content-auth">
          <img
            src="/images/keyB.png"
            className="img-forgotPassword img-finish"
            alt=""
          />
          <p>
            Будьте обережні з вибором нового пароля! Можливо наступного разу
            його не вийде відновити){" "}
          </p>
        </div>
      </div>
    </div>
  );
};

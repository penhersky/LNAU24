import React, {useState, useEffect} from "react";
import classNames from "classnames";
import {useLazyQuery} from "@apollo/react-hooks";
import {FORGOT_PASSWORD_START} from "../../type/forgotPassword";

import "./auth.scss";

export default (props: any) => {
  const [email, setEmail] = useState("");
  const [resultQuery, setResultQuery] = useState({error: "", message: ""});
  const [inputError, setInputError] = useState("");
  const [forgotPassword, {loading, data}] = useLazyQuery(FORGOT_PASSWORD_START);

  const onChangeEmail = (e: any) => setEmail(e.target.value);

  const subminForm = (e: any) => {
    e.preventDefault();
    if (email) {
      forgotPassword({variables: {email}});
    }
  };
  useEffect(() => {
    if (data && data.forgotPasswordStart) {
      setResultQuery(data.forgotPasswordStart);
      if (data.forgotPasswordStart.error) {
        setInputError("email");
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
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input
                className={classNames(
                  "uk-input",
                  inputError === "email" ? "uk-form-danger" : ""
                )}
                type="text"
                placeholder="Email"
                value={email}
                onChange={onChangeEmail}
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
          <img src="/images/key.png" className="img-forgotPassword" alt="" />
          <p>Будьте обережні з приватними даними</p>
        </div>
      </div>
    </div>
  );
};

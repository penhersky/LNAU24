import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {useMutation} from "@apollo/react-hooks";
import {REGISTRATION} from "../../type/registration";
import "./auth.scss";

export default (props: any) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [inputError, setInputError] = useState("");
  const [resultQuery, setResultQuery] = useState({error: "", message: ""});
  const [registration, {data, loading}] = useMutation(REGISTRATION);

  const onChangeName = (e: any) => setName(e.target.value);
  const onChangeSurname = (e: any) => setSurname(e.target.value);
  const onChangeEmail = (e: any) => setEmail(e.target.value);

  const subminForm = (e: any) => {
    e.preventDefault();
    registration({variables: {surname, name, email}});
  };

  useEffect(() => {
    if (data) {
      if (data.startRegister) {
        setResultQuery(data.startRegister);
        if (data.startRegister.error)
          setInputError(data.startRegister.error.split('"')[1]);
      }
      setName("");
      setSurname("");
      setEmail("");
    }
  }, [data]);
  return (
    <div className="auth">
      <div className="form-box uk-text-center">
        <form
          className="uk-card uk-card-default uk-card-body uk-animation-scale-up"
          onSubmit={subminForm}
        >
          <p> Cтворіть свій обліковий запис </p>
          <p style={{color: "red"}}>
            {resultQuery.error ? resultQuery.error : ""}
          </p>
          <p style={{color: "green"}}>
            {resultQuery.message ? resultQuery.message : ""}
          </p>
          <div className="uk-margin">
            <div className="uk-inline  uk-width-1-1@m">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input
                className={classNames(
                  "uk-input",
                  inputError === "name" ? "uk-form-danger" : ""
                )}
                type="text"
                placeholder="Ім'я"
                value={name}
                onChange={onChangeName}
              />
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1@m">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input
                className={classNames(
                  "uk-input",
                  inputError === "surname" ? "uk-form-danger" : ""
                )}
                type="text"
                placeholder="Прізвище"
                value={surname}
                onChange={onChangeSurname}
              />
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1@m">
              <span className="uk-form-icon" uk-icon="icon: mail"></span>
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
            Зареєструватися
          </button>
          <p className="uk-link-muted">
            Вже є аккаунт?{" "}
            <NavLink to="/api/login" className="uk-link-muted">
              Увійти
            </NavLink>
          </p>
        </form>
      </div>
      <div className="information uk-animation-fade">
        <div className="content-auth">
          <img src="/images/LNAU.jpg" alt="" />
          <h2>LNAU24</h2>
          <p>
            Идейные соображения высшего порядка, а также начало повседневной
            работы по формированию позиции позволяет выполнять важные задания по
            разработке дальнейших направлений развития.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputError, setInputError] = useState("");
  const [resultQuery, setResultQuery] = useState({error: "", message: ""});
  const [registration, {data, loading}] = useMutation(REGISTRATION);

  const onChangeName = (e: any) => setName(e.target.value);
  const onChangeSurname = (e: any) => setSurname(e.target.value);
  const onChangeEmail = (e: any) => setEmail(e.target.value);
  const onChangePassword = (e: any) => setPassword(e.target.value);
  const onChangeConfirmPassword = (e: any) =>
    setConfirmPassword(e.target.value);

  const subminForm = (e: any) => {
    e.preventDefault();
    if (surname && name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        registration({variables: {surname, name, email, password}});
      } else {
        setResultQuery({
          error: "Паролі повинні співпадати!",
          message: ""
        });
        setConfirmPassword("");
        setInputError("confirmPassword");
      }
    }
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
      setPassword("");
      setConfirmPassword("");
    }
  }, [data]);
  return (
    <div className="auth">
      <div className="form-box uk-text-center">
        <form
          className="uk-card uk-card-default uk-card-body uk-animation-scale-up"
          onSubmit={subminForm}
        >
          {loading ? <div uk-spinner="ratio: 1"></div> : ""}
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
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1@m">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input
                className={classNames(
                  "uk-input",
                  inputError === "confirmPassword" ? "uk-form-danger" : ""
                )}
                type="password"
                placeholder="Повторіть пароль!"
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
            LBAU24 це opensource проект створений для поширення інформації серед
            студентів та викладачів.
          </p>
          <p>Ми активно розвиваємося і приймаємо будь які ідеї та критику!</p>{" "}
          <a
            className="uk-link-muted"
            href="https://web.telegram.org/#/im?p=@LNAU24support"
          >
            <p>Тут ви можете залишати ваші пропозиції</p>
          </a>
        </div>
      </div>
    </div>
  );
};

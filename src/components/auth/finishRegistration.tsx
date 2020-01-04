import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {useMutation} from "@apollo/react-hooks";
import {FINISH_REGISTRATION} from "../../type/registration";

import "./finishRegistration.scss";

export default (props: any) => {
  const [finishRegister, {data, loading}] = useMutation(FINISH_REGISTRATION);
  const [result, setResult] = useState({error: "", message: ""});
  const [_id, setId] = useState(0);
  const paramsString = props.match.params.params;
  useEffect(() => {
    const searchParams = new URLSearchParams(paramsString);
    const key = searchParams.get("key");
    const id = searchParams.get("id");
    setId(Number(id));
    finishRegister({variables: {id: Number(id), key: key?.toString()}});
  }, [finishRegister, paramsString]);
  useEffect(() => {
    if (data) {
      setResult(data.finishRegister);
    }
  }, [data]);
  if (loading) {
    return <span uk-spinner="ratio: 4.5"></span>;
  }
  const returnResultToJSX = (result: any): React.ReactNode => {
    if (result.message) {
      return (
        <>
          <h3 style={{color: "green"}}>{result.message}</h3>
          <p>
            Тепер ви можете перейти на{" "}
            <NavLink to="/api/login" className="uk-link-muted">
              сторінку авторизації
            </NavLink>{" "}
            або переглянути свій{" "}
            <NavLink to={"/user/" + _id} className="uk-link-muted">
              профіль
            </NavLink>
            !
          </p>
        </>
      );
    }
    return (
      <>
        <h3 style={{color: "red"}}>{result.error}</h3>
        <p>
          Якщо ключ підтвердження не правильний або його термін дії вийшов!
          Проведіть будь-ласка повторну{" "}
          <NavLink to={"/user/" + _id} className="uk-link-muted">
            реєстрацію
          </NavLink>{" "}
          для отримання нового посилання!
        </p>
      </>
    );
  };
  return (
    <div className="finish-registration">
      <img
        src="/images/confirm.jpg"
        alt=""
        className="uk-animation-slide-top"
      ></img>
      <div className="text uk-animation-slide-bottom">
        {returnResultToJSX(result)}
      </div>
    </div>
  );
};

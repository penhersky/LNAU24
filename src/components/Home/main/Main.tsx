import React from "react";

import "./main.scss";

export default (props: any) => {
  return (
    <div className="main">
      <div className="video-box uk-cover-container uk-height-large">
        <div
          className="uk-overlay uk-position-cover uk-height-large overlay"
          style={{
            position: "relative",
            zIndex: 980
          }}
        >
          <img src="images/logo.png" width="300" alt="" uk-img="true"></img>
          <div className="text">
            <h1>Львівський Національний Аграрний Університет</h1>
            <h2>LNAU24</h2>
            <p>За підтримки кафедри Інформаційних систем і технологій</p>
          </div>
        </div>
        <video
          uk-video="autoplay: inview; repeat: true"
          src="http://localhost:3000/videos/main.mp4"
          muted
          uk-cover="true"
        ></video>
      </div>
    </div>
  );
};

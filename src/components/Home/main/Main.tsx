import React from "react";

export default (props: any) => {
  return (
    <div className="main">
      <div className="video-box uk-cover-container uk-height-large">
        <video
          uk-video="autoplay: inview"
          src="https://yootheme.com/site/images/media/yootheme-pro.mp4"
          muted
          uk-cover="true"
        ></video>
      </div>
    </div>
  );
};

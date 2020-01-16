import React, {useEffect, useState} from "react";

import "./toTop.scss";

export default (props: any) => {
  const [scroll, setScroll] = useState();
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", data => {
    setScroll(data);
  });
  useEffect(() => {
    if (scroll?.path[1].scrollY > 100) setShow(true);
    if (scroll?.path[1].scrollY < 100) setShow(false);
  }, [scroll]);
  return (
    <span
      style={{visibility: show ? "initial" : "hidden"}}
      uk-totop="ratio: 1.7"
      uk-scroll="true"
      className="to-top"
    ></span>
  );
};

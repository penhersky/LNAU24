import React, { useEffect, useState } from 'react';

import './toTop.scss';

export default (props: any) => {
  const [scroll, setScroll] = useState(0);
  const [show, setShow] = useState(false);
  window.addEventListener('scroll', (data: any) => {
    setScroll(window.scrollY);
  });
  useEffect(() => {
    if (scroll > 100) setShow(true);
    if (scroll < 100) setShow(false);
  }, [scroll]);
  return (
    <span
      style={{ visibility: show ? 'initial' : 'hidden' }}
      uk-totop="ratio: 1.7"
      uk-scroll="true"
      className="to-top"
    ></span>
  );
};

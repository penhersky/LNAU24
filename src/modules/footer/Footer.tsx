import React from 'react';

import './footer.scss';

export default () => {
  return (
    <div className="footer">
      <div className="footer-top uk-text-center">
        <h4>© LNAU 2025</h4>
        <h4>All Rights Reserved.</h4>
      </div>
      <div className="footer-button">
        <div className="footer-icons">
          <ul className="uk-iconnav uk-iconnav-horizontal">
            <li className="uk-animation-toggle">
              <a
                href="/"
                className=" uk-margin-small-right footer-link uk-animation-scale-down"
                uk-icon="icon: twitter; ratio: 1.5"
              >
                {}
              </a>
            </li>
            <li className="uk-animation-toggle">
              <a
                href="https://www.facebook.com/lvivlnau/"
                className=" uk-margin-small-right footer-link  uk-animation-scale-down"
                uk-icon="icon: facebook; ratio: 1.5"
              >
                {}
              </a>
            </li>
            <li className="uk-animation-toggle">
              <a
                href="https://www.instagram.com/lnau_lviv_official/"
                className=" uk-margin-small-right footer-link uk-animation-scale-down"
                uk-icon="icon: instagram; ratio: 1.5"
              >
                {}
              </a>
            </li>
            <li className="uk-animation-toggle">
              <a
                href="https://www.youtube.com/channel/UCerzJ9DQ1w_r1EkfSWoXNlQ"
                className=" uk-margin-small-right footer-link uk-animation-scale-down"
                uk-icon="icon: youtube; ratio: 1.5"
              >
                {}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-text-links">
          <a href="http://minagro.gov.ua/" className="footer-link">
            Міністерство аграрної політики.
          </a>
          <a href="https://mon.gov.ua/ua" className="footer-link">
            Міністерство освіти,науки,молоді та спорту.
          </a>
          <a href="http://www.smcae.kiev.ua/news.php" className="footer-link">
            НМЦ аграрної освіти.
          </a>
          <a href="http://www.osvita.org.ua/" className="footer-link">
            Освітній портал.
          </a>
          <a href="http://osvita.ua/" className="footer-link">
            Освіта.ua.
          </a>
          <a href="http://sfs.gov.ua/" className="footer-link">
            Міністерство доходів і зборів України.
          </a>
        </div>
      </div>
    </div>
  );
};

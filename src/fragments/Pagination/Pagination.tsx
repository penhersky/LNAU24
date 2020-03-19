import React from 'react';
import { NavLink } from 'react-router-dom';

import './pagination.scss';

export default (props: { currentPage: Number; countPages: number }) => {
  const nextPage = +props.currentPage + 1;
  const previousPage = +props.currentPage - 1;
  const link = (page: number) => `/news/${page}`;
  const renderNext = () => {
    if (nextPage <= props.countPages) {
      return (
        <>
          <li>
            <NavLink to={link(nextPage)}>{nextPage}</NavLink>
          </li>
          {nextPage + 1 <= props.countPages ? (
            <li>
              <NavLink to={link(nextPage + 1)}>{nextPage + 1}</NavLink>
            </li>
          ) : null}
        </>
      );
    }
  };
  const renderPrevious = () => {
    if (previousPage !== 1) {
      return (
        <>
          {previousPage - 1 !== 1 ? (
            <li>
              <NavLink to={link(previousPage - 1)}>{previousPage - 1}</NavLink>
            </li>
          ) : null}
          <li>
            <NavLink to={link(previousPage)}>{previousPage}</NavLink>
          </li>
        </>
      );
    }
  };
  return (
    <div className="pagination">
      {props.currentPage !== 1 ? (
        <NavLink to={link(previousPage)} className="pagination-arrow">
          <span
            className="uk-margin-small-right"
            uk-pagination-previous="ratio: 2.5"
          ></span>
        </NavLink>
      ) : (
        <div></div>
      )}
      <ul className="uk-pagination uk-text-lead">
        {props.currentPage > 1 ? (
          <>
            <li>
              <NavLink to={link(1)}>1</NavLink>
            </li>

            {previousPage - 3 >= 1 ? (
              <li className="uk-disabled">
                <span>...</span>
              </li>
            ) : null}
            {renderPrevious()}
          </>
        ) : null}

        <li className="uk-active">
          <span>{props.currentPage}</span>
        </li>

        {props.currentPage !== props.countPages ? (
          <>
            {renderNext()}
            {nextPage + 3 <= props.countPages ? (
              <li className="uk-disabled">
                <span>...</span>
              </li>
            ) : null}

            {nextPage + 2 <= props.countPages ? (
              <li>
                <NavLink to={link(props.countPages)}>
                  {props.countPages}
                </NavLink>
              </li>
            ) : null}
          </>
        ) : null}
      </ul>
      {props.countPages !== props.currentPage ? (
        <NavLink to={link(nextPage)} className="pagination-arrow">
          <span
            className="uk-margin-small-left"
            uk-pagination-next="ratio: 2.5"
          ></span>
        </NavLink>
      ) : null}
    </div>
  );
};

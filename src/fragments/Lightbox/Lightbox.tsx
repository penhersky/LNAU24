import React from 'react';
import classnames from 'classnames';

export default (props: {
  imageUrl: string;
  lightbox?: string;
  className?: string;
}) => {
  return (
    <div
      style={{margin: '2px'}}
      uk-lightbox={props.lightbox}
      className={classnames(props.className)}
    >
      <a className="uk-inline" href={props.imageUrl} data-caption="">
        <img src={props.imageUrl} alt="" />
      </a>
    </div>
  );
};

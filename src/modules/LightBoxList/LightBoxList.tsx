import React from 'react';

import { LightBox } from '../../fragments';

export default (props: { imageList: Array<string> }) => {
  const showItems = (imageList: Array<string>) => {
    return imageList.map((image) => <LightBox imageUrl={image} />);
  };
  return (
    <div className="light-box-list">
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        uk-slider="sets: true"
      >
        <ul
          className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m"
          uk-lightbox="animation: slide"
        >
          {showItems(props.imageList)}
        </ul>
        <span
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          uk-slidenav-previous
          uk-slider-item="previous"
          uk-icon="icon: chevron-left; ratio: 3.5"
        ></span>
        <span
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          uk-slidenav-next
          uk-slider-item="next"
          uk-icon="icon: chevron-right; ratio: 3.5"
        ></span>
      </div>
    </div>
  );
};

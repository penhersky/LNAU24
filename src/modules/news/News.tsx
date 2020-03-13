import React from 'react';
import { NavLink } from 'react-router-dom';

import './news.scss';

export default (props: {
  id: Number;
  title: string;
  body: string;
  author: string;
  views: Number;
  images: Array<string>;
  createdAt: string;
}) => {
  const showImages = (images: Array<string>) => {
    return images.map((image) => <img src={image} alt="" />);
  };

  return (
    <div className="uk-card uk-card-default uk-card-body uk-width-2-3@m news-card">
      <h3 className="uk-card-title uk-text-center">{props.title}</h3>
      <p>{props.body.slice(0, 350)}...</p>
      <div className="uk-inline read-news">
        <NavLink
          to="/news/more/:id"
          className="uk-overlay uk-position-center uk-dark read-more uk-button-text"
        >
          Переглянути повністю
        </NavLink>
        <div className="images-news uk-flex uk-flex-center">
          {props.images.length && showImages(props.images)}
        </div>
      </div>
      <div className="news-card-detail">
        <p> {props.views}</p>
        <p id="author-news"> {props.author}</p>
        <p id="create-news">{props.createdAt}</p>
      </div>
    </div>
  );
};
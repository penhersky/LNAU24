import React from 'react';

import first from '../../../image/main/1.jpeg';
import second from '../../../image/main/2.jpg';
import third from '../../../image/main/3.jpg';

import { LightBoxList } from '../../../modules';

import './main.scss';

export default (props: any) => {
  return (
    <div className="main">
      <div className="video-box uk-cover-container" style={{ height: 700 }}>
        <div
          className="uk-overlay uk-position-cover overlay"
          style={{
            position: 'relative',
            zIndex: 100,
            height: '100%',
          }}
        >
          <div className="main-overlay-content">
            <img src="images/Logo.png" width="300" alt="" uk-img="true"></img>
            <div className="text">
              <h1>Львівський Національний Аграрний Університет</h1>
              <h2>LNAU24</h2>
              <p>За підтримки кафедри Інформаційних систем і технологій</p>
            </div>
          </div>
          <div className="hat-button">
            <div className="hat-info">
              <h3 className="uk-card-title">Заголовок1</h3>
              <p>
                Так само постійне інформаційно-пропагандистське забезпечення
                нашої діяльності в значній мірі обумовлює створення форм
                розвитку.
              </p>
            </div>
            <div className="hat-info ">
              <h3 className="uk-card-title">Заголовок2</h3>
              <p>
                Різноманітний і багатий досвід подальший розвиток різних форм
                діяльності в значній мірі обумовлює створення моделі розвитку.
              </p>
            </div>
            <div className="hat-info">
              <h3 className="uk-card-title">Заголовок3</h3>
              <p>
                З іншого боку склалася структура організації вимагають від нас
                аналізу форм розвитку.
              </p>
            </div>
          </div>
        </div>
        <video
          uk-video="autoplay: inview; repeat: true"
          src="http://localhost:3000/videos/main.mp4"
          muted
          uk-cover="true"
        ></video>
      </div>
      <div
        className="main-blocs uk-padding-small"
        uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300"
      >
        <div
          className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin-large"
          uk-grid=""
        >
          <div className="uk-card-media-left uk-cover-container">
            <img src={first} alt="" uk-cover="" />
            <canvas width="100" height="400"></canvas>
          </div>
          <div>
            <div className="uk-card-body">
              <h3 className="uk-card-title uk-text-center ">
                Значимість цих проблем настільки очевидна, що початок
                повсякденної роботи по формуванню
              </h3>
              <p>
                &#8195;&#8195;Не слід, однак забувати, що постійний кількісний
                ріст і сфера нашої активності вимагають від нас аналізу нових
                пропозицій. Різноманітний і багатий досвід реалізація намічених
                планових завдань дозволяє виконувати важливі завдання по
                розробці форм розвитку. З іншого боку реалізація намічених
                планових завдань забезпечує широкому колу (фахівців) участь у
                формуванні систем масової участі. Так само склалася структура
                організації вимагають від нас аналізу подальших напрямків
                розвитку.
              </p>
            </div>
          </div>
        </div>
        <div
          className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin-large"
          uk-grid=""
        >
          <div>
            <div className="uk-card-body">
              <h3 className="uk-card-title uk-text-center">
                Таким чином подальший розвиток різних форм
              </h3>
              <p>
                &#8195;&#8195;Таким чином початок повсякденної роботи по
                формуванню позиції вимагають визначення та уточнення напрямків
                прогресивного розвитку. Різноманітний і багатий досвід
                реалізація намічених планових завдань є цікавий експеримент
                перевірки позицій, займаних учасниками щодо поставлених завдань.
                Не слід, однак забувати, що нова модель організаційної
                діяльності в значній мірі обумовлює створення систем масового
                участі. Таким чином зміцнення і розвиток структури вимагають від
                нас аналізу системи навчання кадрів, відповідає нагальним
                потребам. Різноманітний і багатий досвід рамки і місце навчання
                кадрів відіграє важливу роль у формуванні нових пропозицій.
              </p>
            </div>
          </div>
          <div className="uk-card-media-left uk-cover-container">
            <img src={second} alt="" uk-cover="" />
            <canvas width="100" height="400"></canvas>
          </div>
        </div>
        <div
          className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s  uk-margin-large"
          uk-grid=""
        >
          <div className="uk-card-media-left uk-cover-container">
            <img src={third} alt="" uk-cover="" />
            <canvas width="100" height="400"></canvas>
          </div>
          <div>
            <div className="uk-card-body">
              <h3 className="uk-card-title uk-text-center ">
                Ідейні міркування вищого порядку
              </h3>
              <p>
                &#8195;&#8195;Товариші! постійний кількісний ріст і сфера нашої
                активності являє собою цікавий експеримент перевірки систем
                масової участі. Ідейні міркування вищого порядку, а також
                постійний кількісний ріст і сфера нашої активності дозволяє
                оцінити значення нових пропозицій. Таким чином постійне
                інформаційно-пропагандистське забезпечення нашої діяльності
                забезпечує широкому колу (фахівців) участь у формуванні
                відповідний умов активізації. Різноманітний і багатий досвід
                подальший розвиток різних форм діяльності відіграє важливу роль
                у формуванні системи навчання кадрів, відповідає нагальним
                потребам. Завдання організації, особливо ж зміцнення і розвиток
                структури дозволяє оцінити значення напрямків прогресивного
                розвитку.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-button">
        <div className="main-button-content">
          <h2 className="uk-text-muted uk-text-center">
            Повсякденна практика показує
          </h2>
          <p className="uk-text-small">
            &#8195;&#8195;Різноманітний і багатий досвід постійне
            інформаційно-пропагандистське забезпечення нашої діяльності тягне за
            собою процес впровадження і модернізації напрямків прогресивного
            розвитку.
            <br /> &#8195;&#8195;Таким чином постійний кількісний ріст і сфера
            нашої активності дозволяє оцінити значення істотних фінансових і
            адміністративних умов. Повсякденна практика показує, що консультація
            з широким активом вимагають від нас аналізу систем масового участі.
            <br />
            &#8195;&#8195;Таким чином консультація з широким активом забезпечує
            широкому колу (фахівців) участь у формуванні подальших напрямків
            розвитку. Так само склалася структура організації забезпечує
            широкому колу (фахівців) участь у формуванні напрямків прогресивного
            розвитку. Таким чином реалізація намічених планових завдань відіграє
            важливу роль у формуванні форм розвитку. Ідейні міркування вищого
            порядку, а також рамки і місце навчання кадрів в значній мірі
            обумовлює створення позицій, займаних учасниками щодо поставлених
            завдань.
          </p>
        </div>
        <div className="main-slider">
          <LightBoxList
            imageList={[
              'http://lnau.edu.ua/lnau/images/stories/newspod03.02.202.jpg',
              'http://lnau.edu.ua/lnau/images/stories/newspod03.02.203.jpg',
              'http://lnau.edu.ua/lnau/images/stories/newspod03.02.208.jpg',
              'http://lnau.edu.ua/lnau/images/stories/newsekonom17.01.201.jpg',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

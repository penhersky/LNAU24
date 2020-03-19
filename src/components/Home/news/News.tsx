import React from 'react';

import { NewsCard } from '../../../modules';
import { Pagination } from '../../../fragments';

import './news.scss';

export default (props: any) => {
  return (
    <div className="news">
      <div className="news-list">
        <NewsCard
          id={1}
          body="Товарищи! начало повседневной работы по формированию позиции позволяет
       оценить значение соответствующий условий активизации. Значимость этих проблем настолько очевидна,
        что консультация с широким активом позволяет оценить значение систем массового участия."
          title="Ваш шедевр готов!"
          author="test test"
          createdAt="12.02.2020"
          images={[
            'http://lnau.edu.ua/lnau/images/stories/newspodij18.02.20.jpg',
            'http://www.lnau.edu.ua/lnau/images/stories/newspodij18.02.203.JPG',
            'http://lnau.edu.ua/lnau/images/stories/newspodij18.02.201.JPG',
          ]}
          views={342}
        />
      </div>
      <Pagination countPages={100} currentPage={50} />
    </div>
  );
};

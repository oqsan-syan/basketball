import React from 'react';

import './news.scss';

const News = () => {

  const news = [
    {title: 'НБА. Одно очко Батлера, победы Оклахомы, Орлеана и Миннесоты', date: '7 января 2017, 22:15. WTA', srcId: 1},
    {title: 'НБА. Одно очко Батлера, победы Оклахомы, Орлеана и Миннесоты', date: '7 января 2017, 22:15. WTA', srcId: 2},
    {title: 'НБА. Одно очко Батлера, победы Оклахомы, Орлеана и Миннесоты', date: '7 января 2017, 22:15. WTA', srcId: 3},
    {title: 'НБА. Одно очко Батлера, победы Оклахомы, Орлеана и Миннесоты', date: '7 января 2017, 22:15. WTA', srcId: 4},
    {title: 'НБА. Одно очко Батлера, победы Оклахомы, Орлеана и Миннесоты', date: '7 января 2017, 22:15. WTA', srcId: 5},
  ];

  return (
    news.map(item => {
      return (
        <div className="news" key={item.srcId}>
          <div className="news__content">
            <h5 className="news__title">{item.title}</h5>
            <p className="news__date">{item.date}</p>
          </div>
          <img src={require(`./assets/news-${item.srcId}.jpg`)} alt={`news-${item.srcId}`}className="news__img"></img>
        </div>
      )
    })
  );
};

export default News;
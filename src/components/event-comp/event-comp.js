import React from 'react';

import './event-comp.scss';

const Event = () => {

  const events = [
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 1, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 2, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 3, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 4, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 5, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 6, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 7, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 8, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'}
  ]

  return(
    events.map(item => {
      return(
        <section className="event" key={item.srcId}>
          <div className="event__img">
            <img src={require(`./assets/event-${item.srcId}.jpg`)} alt={`event-${item.srcId}`}></img>
          </div>
          <div className="event__content">
              <h4 className="event__title">{item.title}</h4>
              <p className="event__descr">{item.descr}</p>
              <div className="event__bet">
                <p className="event__bet-title">{item.betTitle}</p>
                <div className="event__bet-odds">{item.betOdds}</div>
              </div>
          </div>
          <div className="event__choose">
              <div className="event__choose-title">{item.chooseTitle}</div>
              <a href="#" className="event__btn">Выбрать!</a>
          </div>
        </section>
      )
    })
    
  );
};

export default Event;



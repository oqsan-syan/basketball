import React from 'react';

import './events-list-item.scss';

const EventsListItem = ({event}) => {

  const {title, descr, srcId, betTitle, betOdds, chooseTitle} = event;

  return (
      <section className="event" key={srcId}>
          <div className="event__img">
            <img src={require(`./assets/event-${srcId}.jpg`)} alt={`event-${srcId}`}></img>
          </div>
          <div className="event__content">
              <h4 className="event__title">{title}</h4>
              <p className="event__descr">{descr}</p>
              <div className="event__bet">
                <p className="event__bet-title">{betTitle}</p>
                <div className="event__bet-odds">{betOdds}</div>
              </div>
          </div>
          <div className="event__choose">
              <div className="event__choose-title">{chooseTitle}</div>
              <a href="#" className="event__btn">Выбрать!</a>
          </div>
        </section>
  );
};

export default EventsListItem;
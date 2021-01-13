import React, {Component} from 'react';

export default class Express extends Component {

  state = {
    events : [
      {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 1, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
      {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 2, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
      {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 3, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
      {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 4, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
      {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 5, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
      {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 6, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
      {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 7, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
      {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 8, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    ]
  }
  

  render() {
    // let arr = [this.state.events[Math.round(Math.random() * 8)],this.state.events[Math.round(Math.random() * 8)],this.state.events[Math.round(Math.random() * 8)]];
    let items = []
    let a = this.state.events[Math.round(Math.random() * 8)];
    let b = this.state.events[Math.round(Math.random() * 8)];
    let c = this.state.events[Math.round(Math.random() * 8)];
    if(a !== b && b !== c && c !== a) {
      items = [a,b,c]
    } else {
      items = []
    }

    return (
      items.map((item,index, arr) => {
        if(arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2]) {
          return (
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
        }
        
      })
    );
  }
}
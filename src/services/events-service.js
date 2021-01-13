export default class EventsService {

  data = [
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 1, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - hhhh', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 2, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 3, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 4, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 5, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 6, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 7, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'},
    {title: 'Аль-Ахли - Аль-Джаиш', descr: '10.01.2017 17:15  |  Чемпионат Катара. Мужчины.', srcId: 8, betTitle: 'Аль-Джаиш лидер:', betOdds: '1.5', chooseTitle: 'Аль-Джаиш лидер'}
  ];

  getEvent() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        reject(new Error('Something is wrong'));
      }, 700);
    });
  }
}
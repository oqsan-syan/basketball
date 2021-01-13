import React, {Component} from 'react';
import Calendar from '../calendar/calendar';
import Chempionats from '../chempionats/chempionats';
import Event from '../event-comp/event-comp';

import './header.scss';

export default class Header extends Component {
  state = {
    getCalendarState: false,
    getChempionatsState: false,
    getExpressState: false
  }

  calendarStateHandler = () => {
    this.setState({
      getCalendarState: !this.state.getCalendarState
    });
  }

  chempionatsStateHander = () => {
    this.setState({
      getChempionatsState: !this.state.getChempionatsState
    });
  }

  expressStateHandler = () => {
    console.log('hh')
  }

  newDate = new Date();

  render() {
    return(
      <header className="header">
        {/* Header Top  */}
        <div className="header__top">
          <div className="container-top">
              <a href="#" className="logo">
                <img src={require('./assets/logo.png')} alt="logo"></img>
              </a>
              <nav className="menu">
                <ul className="menu-list">
                  <li className="menu-list__item"><a href="#" className="menu__link">Экспресс прогнозы</a></li>
                  <li className="menu-list__item"><a href="#" className="menu__link">ЧМ Австрии</a></li>
                  <li className="menu-list__item"><a href="#" className="menu__link">ЧМ Польши</a></li>
                  <li className="menu-list__item"><a href="#" className="menu__link">ЧМ России</a></li>
                  <li className="menu-list__item"><a href="#" className="menu__link">ЧМ Украины</a></li>
                  <li className="menu-list__item"><a href="#" className="menu__link">ЧМ Бразилии</a></li>
                </ul>
                <div className="menu-btn" onClick={this.chempionatsStateHander}>
                  <div className="menu-btn__icon">
                    <div className="menu-btn__icon-line"></div>
                  </div>
                  <p className="menu-btn__text">ЕЩЕ</p>
                  {this.state.getChempionatsState ? <Chempionats />: null}
                </div>
              </nav>
          </div>
        </div>
        {/* Header Bottom */}
        <div className="header__bottom-wrapper">
          <div className="container">
            <div className="header__bottom">
              {/* Header Date */}
              <div className="header-date">
                <a href="#" className="header-date__item" id="today" onClick={this.expressStateHandler}>
                  Сегодня

                </a>
                <a href="#" className="header-date__item" id="tomorrow">
                  Завтра
                </a>
                <a href="#" className="header-date__item" id="calendar" 
                onClick={this.calendarStateHandler}>
                  <img src={require('./assets/calendar_icon.png')} alt="calendar-icon" className="calendar-icon"></img>
                  <p className="calendar__date">{ `${this.newDate.getDate()}.${this.newDate.getMonth()+1}.${this.newDate.getFullYear()}`}</p>
                </a>
                {this.state.getCalendarState ? <Calendar />: null}
              </div>
              {/* Header Slider */}
              <div className="header-slider">
                <img src={require('./assets/left-c.svg')} alt="prev" className="prev"></img>
                <a href="#" className="header-slider__item">
                  <img src={require('./assets/slid-1.png')} alt="slide-1"></img>
                </a>
                <a href="#" className="header-slider__item">
                  <img src={require('./assets/slid-2.png')} alt="slide-2"></img>
                </a>
                <a href='#' className="header-slider__item">
                  <img src={require('./assets/slid-3.png')} alt="slide-3"></img>
                </a>
                <div className="header-slider__item">
                  <img src={require('./assets/slid-4.png')} alt="slide-4"></img>
                </div>
                <div className="header-slider__item">
                  <img src={require('./assets/slid-5.png')} alt="slide-5"></img>
                </div>
                <div className="header-slider__item">
                  <img src={require('./assets/slid-6.png')} alt="slide-6"></img>
                </div>
                <div className="header-slider__item">
                  <img src={require('./assets/slid-7.png')} alt="slide-7"></img>
                </div>
                <div className="header-slider__item">
                  <img src={require('./assets/slid-8.png')} alt="slide-8"></img>
                </div>
                <div className="header-slider__item">
                  <img src={require('./assets/slid-2.png')} alt="slide-2"></img>
                </div>
                <div className="header-slider__item">
                  <img src={require('./assets/slid-3.png')} alt="slide-3"></img>
                </div>
                <img src={require('./assets/right-c.svg')} alt="next" className="next"></img>
              </div>
               
            </div>
          </div>
        </div>
      </header>
    );
  };
}
  


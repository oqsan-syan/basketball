import React, {Component} from 'react';

import './calendar.scss';

export default class Calendar extends Component {
  state = {
    days: [],
    prevDays: [],
    nextDaysArr: [],
    months: [
        "Январь‎",
        "Февраль‎",
        "Март‎",
        "Апрель‎",
        "Май‎",
        "Июнь‎",
        "Июль‎",
        "Август‎",
        "Сентябрь‎",
        "Октябрь‎",
        "Ноябрь‎",
        "Декабрь‎",
      ],
    monthDays: [],
  }

  date = new Date();

  renderCalendar = () => {
    this.date.setDate(1);
    const lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    const firstDayIndex = this.date.getDay();
    const lastDayIndex = new Date(this.date.getFullYear(), this.date.getMonth() + 1,0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    const newArrPrev = [];
    const newArrDays = [];
    const newArrNext = [];

    for (let x = firstDayIndex; x > 0; x--) {
      newArrPrev.push(prevLastDay - x + 1)
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        this.date.getMonth() === new Date().getMonth()
      ) {
        newArrDays.push(i)
      } else {
        newArrDays.push(i)
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      newArrNext.push(j);
    }

    this.setState(() => {
      return {
        prevDays: newArrPrev,
        days: newArrDays,
        nextDaysArr: newArrNext
      }
    });
  }

    componentDidMount() {
      this.renderCalendar();
    }

    setPrevMonth = () => {
      this.date.setMonth(this.date.getMonth() - 1);
      this.renderCalendar()
    }

    setNextMonth = () => {
      this.date.setMonth(this.date.getMonth() + 1);
      this.renderCalendar();
    }

  render () {
    return (
      <div className="calendar-wrapper">
        <div className="calendar">
          <div className="month">
            <img src={require("./assets/left-c.svg")} alt="left" className="prev-c"
            onClick={() => this.setPrevMonth()}></img>
            <div className="date">
              <h1> {this.state.months[this.date.getMonth()]} {this.date.getFullYear()}</h1>
            </div>
            <img src={require("./assets/right-c.svg")} alt="right" className="next-c"
            onClick={() => this.setNextMonth()}></img>
          </div>
        <div className="weekdays">
          <div>вс</div>
          <div>Пн</div>
          <div>Вт</div>
          <div>СР</div>
          <div>чт</div>
          <div>пт</div>
          <div>сб</div>
        </div>
        <div className="days">
          {
            this.state.prevDays.map(prev => {
              return <div className="prev-date">{prev}</div>
            })
          }
          {
            this.state.days.map(day => {
              if(day === new Date().getDate() &&
              this.date.getMonth() === new Date().getMonth()) {
                return <div className='today'>{day}</div>
              } else {
                return <div>{day}</div>
              }
              
            })
          }
          {
            this.state.nextDaysArr.map(next => {
              return <div className="next-date">{next}</div>
            })
          }
          
        </div>
      </div>
    </div>
    );
  }
}

// Calendar
// const date = new Date();

// const renderCalendar = () => {
//   date.setDate(1);

//   const monthDays = document.querySelector(".days");

//   const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

//   const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

//   const firstDayIndex = date.getDay();

//   const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay();

//   const nextDays = 7 - lastDayIndex - 1;

//   const months = [
//     "Январь‎",
//     "Февраль‎",
//     "Март‎",
//     "Апрель‎",
//     "Май‎",
//     "Июнь‎",
//     "Июль‎",
//     "Август‎",
//     "Сентябрь‎",
//     "Октябрь‎",
//     "Ноябрь‎",
//     "Декабрь‎",
//   ];

//   document.querySelector(".date h1").innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;

//   let days = "";

//   for (let x = firstDayIndex; x > 0; x--) {
//     days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//   }

//   for (let i = 1; i <= lastDay; i++) {
//     if (
//       i === new Date().getDate() &&
//       date.getMonth() === new Date().getMonth()
//     ) {
//       days += `<div class="today">${i}</div>`;
//     } else {
//       days += `<div>${i}</div>`;
//     }
//   }


// renderCalendar();
// let newDate = new Date();

// document.querySelector('.calendar__date').innerHTML = `${newDate.getDate()}.${newDate.getMonth()+1}.${newDate.getFullYear()}`;

// const calendar = document.querySelector('.calendar')
// const calendarIcon = document.getElementById('calendar');

// calendarIcon.addEventListener('click', () => {
//   calendar.classList.toggle('hide');
// });

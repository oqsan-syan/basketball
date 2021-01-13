import React, {Component} from 'react';
import Aside from '../aside/aside';

import Event from '../event-comp/event-comp';
import Express from '../express/express';

import './main.scss';

export default class Main extends Component {

  state = {
    express: false,
    event: true
  }

  render() {
    return (
      <div className="container" id="main">
        <main className="main events">
          { 
            this.state.event ? <Event chevState={this.state.event}/> : <Express chexState={this.state.express}/>
          }
        </main>
        <Aside />
      </div>
    );
  }
};

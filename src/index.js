import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app/app';
import ErrorBoundry from './components/error-boundry/error-boundry';
import EventsService from './services/events-service';
import {EventServiceProvider} from './components/event-service-context/event-service-context';

import store from './store';

const eventsService = new EventsService();


ReactDOM.render(
<Provider store={store}>
  <ErrorBoundry>
    <EventServiceProvider value={eventsService}>
      <Router>
        <App/>
      </Router>
    </EventServiceProvider>
  </ErrorBoundry>
</Provider>, 
document.getElementById('root'));
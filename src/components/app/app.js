import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/home-page';
import ExpressPage from '../pages/express-page';

import Footer from '../footer/footer';
import Forecast from '../forecast/forecast';
import Header from '../header/header';
import Main from '../main/main';
import Tennis from '../tennis/tennis';

import './app.scss';

const App = () => {
  return(
    <React.Fragment>
      <Header />
      <Tennis />
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/express" component={ExpressPage}/>
      </Switch>
      {/* 
      <Main />
       */}
      <Forecast />
      <Footer />
    </React.Fragment>
  );
};

export default App;
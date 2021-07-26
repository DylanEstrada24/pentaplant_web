import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { BrowserRouter as Router, Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import './index.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Title from './components/common/Title';
import Main from './components/autobot/Main';
import Setting from './components/autobot/Setting';
import SettingTest from './components/autobot/SettingTest';
import Autobot from './components/autobot/Autobot';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
      <Header />
      {/* <Title /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/autobot" component={Main} />
        <Route exact path="/autobot/setting" component={Setting} />
        <Route exact path="/autobot/test" component={SettingTest} />
        <Route exact path="/autobot/pyramiding" component={Autobot} />
      </Switch>
      <Footer />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

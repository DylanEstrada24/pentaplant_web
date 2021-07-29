import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { BrowserRouter as Router, Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import './index.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
// import LoginHome from './components/home/LoginHome';
import About from './components/market/About';
import Fees from './components/market/Fees';
import Vision from './components/mtop/Vision';
import WhitePaper from './components/mtop/WhitePaper';
import RecommandGain from './components/recommand/RecommandGain';
import Level from './components/recommand/Level';
import Title from './components/common/Title';
import Main from './components/autobot/Main';
import AutobotAbout from './components/autobot/AutobotAbout';
import Purchase from './components/autobot/Purchase';
import Setting from './components/autobot/Setting';
import SettingTest from './components/autobot/SettingTest';
import Autobot from './components/autobot/Autobot';
import Ask from './components/ask/Ask';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
      <Header />
      {/* <Title /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" component={LoginHome} /> */}
        <Route exact path="/market/about" component={About} />
        <Route exact path="/market/fees" component={Fees} />
        <Route exact path="/mtop/vision" component={Vision} />
        <Route exact path="/mtop/whitePaper" component={WhitePaper} />
        <Route exact path="/recommand/recommandGain" component={RecommandGain} />
        <Route exact path="/recommand/level" component={Level} />
        <Route exact path="/autobot" component={Main} />
        <Route exact path="/autobot/about" component={AutobotAbout} />
        <Route exact path="/autobot/purchase" component={Purchase} />
        <Route exact path="/autobot/setting" component={Setting} />
        <Route exact path="/autobot/test" component={SettingTest} />
        <Route exact path="/autobot/pyramiding" component={Autobot} />
        <Route exact path="/ask" component={Ask} />
      </Switch>
      <Footer />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

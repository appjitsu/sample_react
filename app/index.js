import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Test1 from './components/Test1.jsx';
import Test2 from './components/Test2.jsx';
import Bootstrap from './stylesheets/base.less';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="test1" component={Test1} />
      <Route path="test2" component={Test2} />
    </Route>
  </Router>
), document.getElementById('app'));

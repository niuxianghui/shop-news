import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Login from "./routes/Login.js";

import Detail from "./routes/Detail.js";

import Home from "./routes/Home.js";

import Admin from "./routes/Admin.js";

import Merchant from "./routes/Merchant.js";

import Users from './routes/Users'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/detail" component={Detail} />
      <Route path="/home" component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/merchant" component={Merchant} />
      <Route path="/users" component={Users} />
    </Router>
  );
}

export default RouterConfig;

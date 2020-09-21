import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {BrowserRouter} from 'react-router-dom'

import App from "./components/App";
import {Bins} from '../imports/collections/Bins';

const routes = (
  <BrowserRouter>
    <Route path='/' component={App}></Route>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import {Bins} from '../imports/collections/Bins';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});

import React, { Component } from "react";
import {Link} from 'react-router-dom'

import Accounts from "./Accounts";

class Header extends Component {
  onBinClick(event) {
    event.preventDefault();
    Meteor.call("bins.insert");
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to='/' className="navbar-brand">Bin Share</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />{" "}
          </li>
          <li>
            <a href="#" onClick={this.onBinClick.bind(this)}>
              Create Bin
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;

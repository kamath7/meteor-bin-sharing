import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";

class Accounts extends Component {
  //componentDidMount and unmount used to use Blaze forms within react

  componentDidMount() {
    //Render blaze accounts form

    this.view = Blaze.render(
      Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container)
    );
  }
  componentWillUnmount() {
    //Kill forms component after usage. Self cleaning
    Blazer.remove(this.view);
  }

  render() {
    return <div ref="container"></div>;
  }
}

export default Accounts;

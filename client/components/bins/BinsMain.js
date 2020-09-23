import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import { Bins } from "../../../imports/collections/Bins";
import BinsEditor from "./BinsEditor";
import BinsViewer from "./BinsViewer";
import BinsShare from "./BinsShare";

class BinsMain extends Component {
  render() {
    if (!this.props.bin) {
      return <div>Loading ...</div>;
    }
    return (
      <div>
        <BinsEditor bin={this.props.bin} />
        <BinsViewer bin={this.props.bin} />
        <BinsShare bin={this.props.bin} />
      </div>
    );
  }
}

export default withTracker((props) => {
  const { binId } = props.match.params;
  Meteor.subscribe("bins");
  Meteor.subscribe("sharedBins");
  return { bin: Bins.findOne(binId) };
})(BinsMain);

//use this.props.match.params.binId

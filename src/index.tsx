import React, { Requireable } from "react";
import * as ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";
import MarketPlace from "./components/marketplace";

class WebComponentWrapper extends React.Component<{ collection: string }, {}> {
  static propTypes: {
    collection: Requireable<string>;
  };

  render() {

    return <MarketPlace collection={this.props.collection} />;
  }
}

WebComponentWrapper.propTypes = {
  collection: PropTypes.string,
};

const waxMarketPlace = reactToWebComponent(WebComponentWrapper, React, ReactDOM, {
  dashStyleAttributes: true,
});
// const wcChecklistShadow = reactToWebComponent(
//   WebComponentWrapper,
//   React,
//   ReactDOM,
//   { dashStyleAttributes: true, shadow: true }
// );

customElements.define("wax-marketplace", waxMarketPlace);
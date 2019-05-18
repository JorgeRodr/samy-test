import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reload.scss";

export class Reload extends Component {
  render() {
    return (
      <div className="gallery__icon-redo">
        <FontAwesomeIcon icon="redo" size="lg" />
        <span>000</span>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./header.scss";

export class Header extends Component {
  // añadir constructor cuando toque

  render() {
    return (
      <div className="header">
        <div className="logo">LOGO</div>
        <div className="input-containter">
          <input type="text" />
        </div>
      </div>
    );
  }
}

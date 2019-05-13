import React, { Component } from "react";
import "./header.scss";

export class Header extends Component {
  // añadir constructor cuando toque

  render() {
    return (
      <div className="header">
        <div className="header__logo">LOGO</div>
        <div className="header__input-containter">
          <input type="text" />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./header.scss";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  render() {
    return (
      <div className="header">
        <div className="header__logo">LOGO</div>
        <div className="header__input-containter">
          <form name="search" onSubmit={this.submit}>
            <input type="text" />
          </form>
        </div>
      </div>
    );
  }

  submit(e) {
    e.preventDefault();
    this.props.onSubmit(e.target[0].value);
  }
}

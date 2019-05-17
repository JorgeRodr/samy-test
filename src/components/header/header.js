import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.scss";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <div>
            <div></div>
          </div>
        </div>
        <div className="header__input-container">
          <form name="search" onSubmit={this.submit}>
            <FontAwesomeIcon icon="search" size="lg" />
            <input type="text" placeholder="You're looking for something?"/>
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

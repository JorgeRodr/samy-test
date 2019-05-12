import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (      
      <div className="header">
        <div class="logo">
            LOGO
        </div>
        <div class="input-containter">
            <input type="text"></input>
        </div>
      </div>
    );
  }
}

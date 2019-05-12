import React, { Component } from "react";

export class Image extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
    <div className="image">
        <div class="image-container">
            <img src="http://lorempixel.com/400/500/"/>
        </div>
        <div class="title-container">
            <h3>Título de foto</h3>
            <span>by</span>
            <span>nombre de autor</span>
        </div>
    </div>      
    );
  }
}

import React, { Component } from "react";
import './image.scss';

export class Image extends Component {
  render() {
    return (
      <div className="image">
        <div className="image__container" style={{ backgroundImage: `url(${this.props.source})` }}>
        </div>
        <div className="image__title">
          <h3>{this.props.title}</h3>
          <span>by</span>
          <span>{this.props.author}</span>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export class Image extends Component {
  render() {
    return (
      <div className="image">
        <div className="image-container">
          <img
            src={this.props.source}
            title={this.props.title}
            alt={this.props.title}
          />
        </div>
        <div className="title-container">
          <h3>{this.props.title}</h3>
          <span>by</span>
          <span>{this.props.author}</span>
        </div>
      </div>
    );
  }
}

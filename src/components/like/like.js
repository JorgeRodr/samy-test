import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./like.scss";

export class Like extends Component {
  constructor(props) {
    super(props);
    this.emitEvent = this.emitEvent.bind(this);
  }

  render() {
    return (
      <div
        className={
          this.props.liked ? "gallery__icon-like--liked" : "gallery__icon-like"
        }
        onClick={this.emitEvent}
      >
        <FontAwesomeIcon icon="thumbs-up" size="lg" />
        <span>{this.props.count}</span>
      </div>
    );
  }

  emitEvent(e) {
    this.props.onClick(e, this.props.url);
  }
}

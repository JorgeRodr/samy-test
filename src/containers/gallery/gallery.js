import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GET_IMAGES, getImages } from "../../store/actions";

export class Gallery extends Component {
  constructor(props) {
      super(props);
      this.click = this.click.bind(this);
  }

  click() {
    this.props.getImages();
  }
  render() {
    return (
      <div className="gallery">
        <button onClick={this.click}>Click me!</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getImages}, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Gallery);

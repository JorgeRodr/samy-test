import React, { Component } from "react";
import { Header } from "../../components/header/header";
import { Image } from "../../components/image/image";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getImagesAction } from "../../store/actions";
import { getImagesSelector, getPaginationSelector } from "../../store/reducer";

export class Gallery extends Component {
  //añadir constructor cuando sea necesario

  constructor(props) {
    super(props);
    this.state = {
      images: null,
      pagination: null
    };
    this.doSomething = this.doSomething.bind(this);
    this.undoSomething = this.undoSomething.bind(this);
  }

  componentDidMount() {
    this.props.getImagesAction();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.images !== this.props.images) {
      const images = this.props.images;
      this.setState({ ...this.state, images });
    }

    if (prevState.pagination !== this.props.pagination) {
      const pagination = this.props.pagination;
      this.setState({ ...this.state, pagination });
    }
  }

  doSomething() {
    const images = [this.state.images[0], this.state.images[1]];
    this.setState({ ...this.state, images });
  }

  undoSomething() {
    const images = this.props.images;
    this.setState({ ...this.state, images });
  }

  createGallery(images) {
    const gallery = [];
    images.forEach(img => {
      gallery.push(
        <Image
          key={img.id}
          source={img.main_attachment.big}
          title={img.title}
          author={img.author}
        />
      );
    });
    return gallery;
  }

  render() {
    if (this.state.images) {
      return (
        <div className="gallery">
          <Header />
          <button onClick={this.doSomething}>Click</button>
          <button onClick={this.undoSomething}>Clock</button>
          <section className="content">
            {this.createGallery(this.state.images)}
          </section>
        </div>
      );
    } else {
      return (
        <div className="gallery">
          <Header />
          <section className="content">No images loaded</section>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    images: getImagesSelector(state),
    pagination: getPaginationSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getImagesAction }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

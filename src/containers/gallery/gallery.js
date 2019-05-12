import React, { Component } from "react";
import { Header } from "../../components/header/header";
import { Image } from "../../components/image/image";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getImagesAction } from "../../store/actions";
import { getImagesSelector } from "../../store/reducer";

export class Gallery extends Component {
  //añadir constructor cuando sea necesario

  componentDidMount() {
    this.props.getImagesAction();
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
    if (this.props.images) {
      return (
        <div className="gallery">
          <Header />
          <section className="content">
            {this.createGallery(this.props.images)}
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
    images: getImagesSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getImagesAction }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

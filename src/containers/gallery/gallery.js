import React, { Component } from "react";
import { Header } from "../../components/header/header";
import { Image } from "../../components/image/image";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getImagesAction } from "../../store/actions";
import {
  getImagesSelector,
  getPaginationSelector,
  getLoadingSelector
} from "../../store/reducer";
import "./gallery.scss";

export class Gallery extends Component {
  //añadir constructor cuando sea necesario

  constructor(props) {
    super(props);
    this.state = {
      images: null,
      pagination: null,
      loading: false
    };
    // this.doSomething = this.doSomething.bind(this);
    // this.undoSomething = this.undoSomething.bind(this);
    this.scrollEventListener = this.scrollEventListener.bind(this);
    this.showLoader = this.showLoader.bind(this);
    this.loadGallery = this.loadGallery.bind(this);
    this.loadNoData = this.loadNoData.bind(this);
  }

  componentDidMount() {
    this.props.getImagesAction();
    this.scrollEventListener();
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

    if (prevState.loading !== this.props.loading) {
      const loading = this.props.loading;
      this.setState({ ...this.state, loading });
    }
  }

  scrollEventListener() {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight && !this.state.loading
      ) {
        this.props.getImagesAction(this.state.pagination.next);
      }
    };
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

  showLoader() {
    return <div className="gallery__loader"></div>;
  }

  loadGallery() {
    return (
      <React.Fragment>
        <section className="gallery__content">
          {this.createGallery(this.state.images)}
        </section>
        {this.state.loading && this.showLoader()}
      </React.Fragment>
    );
  }

  loadNoData() {
    return <section className="gallery__content">No images loaded</section>;
  }

  render() {
    return (
      <div className="gallery">
        <Header />
        {this.state.images && this.state.images.length > 0
          ? this.loadGallery()
          : this.loadNoData()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: getImagesSelector(state),
    pagination: getPaginationSelector(state),
    loading: getLoadingSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getImagesAction }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

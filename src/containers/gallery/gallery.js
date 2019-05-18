import React, { Component } from "react";
import { Header } from "../../components/header/header";
import { Image } from "../../components/image/image";
import { Like } from "../../components/like/like";
import { Reload } from "../../components/reload/reload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getImagesAction,
  likeAction,
  getImagesByNameAction
} from "../../store/actions";
import {
  getImagesSelector,
  getPaginationSelector,
  getLoadingSelector,
  getOnSearchSelector,
  getErrorSelector
} from "../../store/reducer";
import "./gallery.scss";

export class Gallery extends Component {
  constructor(props) {
    super(props);
    this.scrollEventListener = this.scrollEventListener.bind(this);
    this.showLoader = this.showLoader.bind(this);
    this.loadGallery = this.loadGallery.bind(this);
    this.loadNoData = this.loadNoData.bind(this);
    this.handleClickOnLike = this.handleClickOnLike.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.loadReturnToGallery = this.loadReturnToGallery.bind(this);
  }

  render() {
    return (
      <div className="gallery">
        <Header onSubmit={this.handleSearch} />
        {this.props.images && this.props.images.length > 0
          ? this.loadGallery()
          : this.loadNoData()}
      </div>
    );
  }

  componentDidMount() {
    this.props.getImagesAction();
    this.scrollEventListener();
  }

  scrollEventListener() {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        !this.props.loading &&
        !this.props.error &&
        this.props.pagination &&
        this.props.pagination.next
      ) {
        this.props.getImagesAction(this.props.pagination.next);
      }
    };
  }

  createGallery(images) {
    const gallery = [];
    images.forEach(img => {
      const likeElement = img.links.find(elem => {
        return elem.rel === "like";
      });

      gallery.push(
        <div className="gallery__element" key={"fragment" + img.id}>
          <Image
            key={"img" + img.id}
            source={img.main_attachment.big}
            title={img.title}
            author={img.author}
          />
          <Like
            key={"icon" + img.id}
            url={likeElement.uri}
            count={img.likes_count}
            liked={img.liked}
            onClick={this.handleClickOnLike}
          />
          <Reload />
        </div>
      );
    });
    return gallery;
  }

  handleClickOnLike(e, data) {
    this.props.likeAction(data);
  }

  handleSearch(data) {
    if (data) {
      this.props.getImagesByNameAction(data);
    }
  }

  showLoader() {
    return <div className="gallery__loader" />;
  }

  showError() {
    return (
      <div className="error__wrapper">
        <FontAwesomeIcon icon="bomb" size="lg" /> There was an error!
      </div>
    );
  }

  loadGallery() {
    return (
      <React.Fragment>
        <section className="gallery__content">
          <div className="gallery__return">
            {this.props.onSearch ? this.loadReturnToGallery() : null}
          </div>
          {this.createGallery(this.props.images)}
        </section>
        {this.props.loading && this.showLoader()}
        {this.props.error && this.showError()}
      </React.Fragment>
    );
  }

  loadNoData() {
    if (this.props.loading) {
      return this.showLoader();
    }

    if (this.props.error) {
      return this.showError();
    }

    return <section className="gallery__content">No images loaded</section>;
  }

  loadReturnToGallery() {
    return (
      <span onClick={() => window.location.reload()}>Return to gallery</span>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: getImagesSelector(state),
    pagination: getPaginationSelector(state),
    loading: getLoadingSelector(state),
    onSearch: getOnSearchSelector(state),
    error: getErrorSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getImagesAction, likeAction, getImagesByNameAction },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

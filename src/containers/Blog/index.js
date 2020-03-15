import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getNewsPosts } from "../../store/actions/NewsActions";

const mapStateToProps = state => {
  return {
    news: state.news
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getNewsPosts }, dispatch);
};

class Blog extends PureComponent {
  componentDidMount() {
    this.props.getNewsPosts();
  }
  render() {
    return <div>Blog</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);

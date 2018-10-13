import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/AuthReducer/actions";

const withAuth = (WrappedComponent, redirectTo = "", styles, requireUser) => {
  return class extends Component {
    componentDidMount() {
      if (requireUser) {
        this.props.onFetchUser();
      }
    }
    componentDidUpdate() {
      if (requireUser) {
        this.props.onFetchUser();
      }
    }
    render() {
      let content;
      if (this.props.loading) {
        content = <div style={styles}>Loading...</div>;
      } else if (!this.props.isAuth && !redirectTo) {
        content = <WrappedComponent {...this.props} />;
      } else if (this.props.isAuth) {
        content = <WrappedComponent {...this.props} user={this.props.user} />;
      } else if (this.props.error) {
        content = <div style={styles}>Some error Occured</div>;
      } else {
        content = <div style={styles}>Not logged in</div>;
      }
      return content;
    }
  };
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    user: state.auth.user,
    error: state.auth.error,
    loading: state.auth.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: () => dispatch(actions.fetchUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth);

import React, { Component } from "react";
import axios from "axios";
import WhiteContainer from "../WhiteContainer/WhiteContainer";

const withAuth = (WrappedComponent, redirectTo = "") => {
  return class extends Component {
    state = {
      loading: true,
      error: false,
      isAuth: null,
      user: null
    };
    componentDidMount() {
      if (!this.state.loading) {
        return;
      }
      axios
        .get("/getUser", {
          headers: {
            authorization: localStorage.getItem("token")
          }
        })
        .then(response => {
          console.log(response);
          this.setState({
            loading: false,
            error: false,
            isAuth: true,
            user: response.data
          });
        })
        .catch(error => {
          this.setState(
            {
              loading: false,
              error
            },
            () => {
              return redirectTo ? this.props.history.replace("/login") : null;
            }
          );
        });
    }

    render() {
      let content;
      if (this.state.loading) {
        content = (
          <WhiteContainer style={{ height: "40vh" }}>
            <p>Loading...</p>
          </WhiteContainer>
        );
      } else if (!this.state.isAuth && !redirectTo) {
        content = <WrappedComponent {...this.props} />;
      } else if (this.state.isAuth) {
        content = <WrappedComponent {...this.props} user={this.state.user} />;
      } else if (this.state.error) {
        content = (
          <WhiteContainer style={{ height: "40vh" }}>
            <p>Some error Occured</p>
          </WhiteContainer>
        );
      } else {
        content = <p>Not logged in</p>;
      }
      return content;
    }
  };
};

export default withAuth;

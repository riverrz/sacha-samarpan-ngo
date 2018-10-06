import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.location.pathname === this.props.location.pathname) {
      return false;
    }
    return true;
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}
export default withRouter(ScrollToTop);

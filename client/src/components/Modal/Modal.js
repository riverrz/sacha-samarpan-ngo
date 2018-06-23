import React, {Component} from 'react';
import classes from './Modal.css';
import ReactDOM from 'react-dom';
class Modal extends Component {
  componentDidMount() {
    var rect = ReactDOM.findDOMNode(this)
      .getBoundingClientRect()
      console.log(rect);
  }
  render() {
    var indexOfLink = this.props.image.indexOf('/images');
    const relativeLink = this.props.image.slice(indexOfLink);

    return <div className={classes.modalContainer}>
        <button className={classes.exitButton} onClick={this.props.exitClicked}>
          <i class="fas fa-times" />
        </button>
        <img src={relativeLink} alt="Invoked" />
      </div>};
};

export default Modal;
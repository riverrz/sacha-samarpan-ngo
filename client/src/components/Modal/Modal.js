import React, {Component} from 'react';
import classes from './Modal.css';
class Modal extends Component {
  state={
    marginTop: {
      "margin-top": null
    }
  }
  componentDidMount() {
    console.log(window.pageYOffset);
    this.setState({
      marginTop: {
        "margin-top": Math.round(window.pageYOffset) + 80+'px'
      } 
    });
  }
  render() {
    var indexOfLink = this.props.image.indexOf('/images');
    const relativeLink = this.props.image.slice(indexOfLink);

    return <div className={classes.modalContainer} style={this.state.marginTop}>
        <button className={classes.exitButton} onClick={this.props.exitClicked}>
          <i class="fas fa-times" />
        </button>
        <img src={relativeLink} alt="Invoked" />
      </div>};
};

export default Modal;
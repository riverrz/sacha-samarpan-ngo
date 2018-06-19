import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Carousel from '../../components/Carousel/Carousel';
import Maintext from '../../components/Maintext/Maintext';
import Gallery from '../../components/Gallery/Gallery';
import classes from './Frontpage.css';
class Frontpage extends Component {
    render() {
        return(
            <Aux>
                <Carousel />
                <div className={classes.frontTextAndLogoBox}>
                    <div className={classes.saffron} />
                    <Maintext />
                    <div className={classes.green} />
                </div>
                <Gallery invokeBackdrop={(event)=> this.props.invoke(event)}/>
            </Aux>
        );
    }
};

export default Frontpage;
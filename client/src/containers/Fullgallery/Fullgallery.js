import React, {Component} from 'react';
import classes from './Fullgallery.css';
import Gallery from '../../components/Gallery/Gallery';
class Fullgallery extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return(
            <div className={classes.fullGallery}>
                <Gallery invokeBackdrop={(event) => this.props.invoke(event)} />
            </div>
        );
    }
}
    


export default Fullgallery;
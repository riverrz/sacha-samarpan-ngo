import React, {Component} from 'react';
import './Fullgallery.css';
import Gallery from '../../components/Gallery/Gallery';
class Fullgallery extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return(
            <div className='fullGallery'>
                <Gallery invokeBackdrop={(event) => this.props.invoke(event)} />
            </div>
        );
    }
}
    


export default Fullgallery;
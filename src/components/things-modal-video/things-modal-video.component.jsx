import React, { Component } from "react";
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


class ThingModalVideo extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {            
            isOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this)
    }

    openModal () {
        this.setState({isOpen: true})
        this.props.onOpen();
    }

    closeModal () {
        this.setState({isOpen: false})
        this.props.onClose();
    }

    render() {
        const { youtubeID  } = this.props;

        return (
            <React.Fragment>
                <ModalVideo
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId={youtubeID} 
                    onClose={this.closeModal} 
                />
                <button
                    className="openVideoBtn" 
                    onClick={this.openModal} 
                    style={{ backgroundImage : 'url(https://img.youtube.com/vi/'+youtubeID+'/sddefault.jpg)' }}>
                        <span><FontAwesomeIcon icon={faPlay} /> Im video, Play me</span>
                    </button>
            </React.Fragment>
        )
    }

}

export default ThingModalVideo;
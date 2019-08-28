import React, { Component } from 'react';
import { Player , ControlBar } from 'video-react';
import 'video-react/dist/video-react.css';

export default class MainVideo extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {
        }
        
    }

    render(){
        return (
            <Player
              playsInline={true}
              poster={this.props.videoPoster}
              src={this.props.videoUrl}
              autoPlay={true}
              muted={true}
              preload="auto"
              loop={true}
            >
                <ControlBar autoHide={true} disableCompletely={true} className="videoControlbar" />
            </Player>
        );
    }
}
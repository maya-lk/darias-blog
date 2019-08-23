import React, { Component } from "react";
import SeekVideoElement from './animations/seek-video'
//import Nav from 'react-bootstrap/Nav';

class SeekVideo extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {
        }
        
      }

    render() {       
        return (
            <section className="sectionWrap d-flex justify-content-between flex-wrap" id="seekingVideoWrap">
                <SeekVideoElement seekvideoURL={this.props.seekvideoparam}/>
                <div className="seekVideoCont"></div>               
            </section>
        )
    }

}

export default SeekVideo;
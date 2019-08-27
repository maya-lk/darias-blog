import React, { Component } from "react";
import SeekVideoElement from './animations/seek-video'
import '../styles/seek-video.css'
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
                <div className="seekVideoCont">
                    {
                        Object.values(this.props.seekVideoContent).map(function(content , index) {
                            var contClass = ''
                            if( index%2 ){
                                contClass = 'odd';
                            }else{
                                contClass = 'even';
                            }
                            return(
                                <div key={index} className={contClass}>{content}</div>
                            )
                        })
                    }
                </div>               
            </section>
        )
    }

}

export default SeekVideo;
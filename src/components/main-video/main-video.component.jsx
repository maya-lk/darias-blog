import React from 'react';
import { Player , ControlBar } from 'video-react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectVideoUrl , selectVideoPoster } from '../../redux/home/home.selectors';

import 'video-react/dist/video-react.css';
import mainVideoOverlay from '../../assets/images/main-video-bg.png';

const MainVideo = ({ video , videoPoster }) => (
    <section className="sectionWrap" id="mainVideoWrap">
        <span className="imgOverlay" style={{backgroundImage: 'url('+mainVideoOverlay+')'}}></span>
        <Player
            playsInline={true}
            poster={videoPoster}
            src={video}
            autoPlay={true}
            muted={true}
            preload="auto"
            loop={true}
        >
            <ControlBar autoHide={true} disableCompletely={true} className="videoControlbar" />
        </Player>
    </section>
);

const mapStateToProps = createStructuredSelector({
    video : selectVideoUrl,
    videoPoster : selectVideoPoster
});

export default connect(mapStateToProps)(MainVideo);
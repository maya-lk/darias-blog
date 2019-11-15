import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMusicContent } from '../../redux/home/home.selectors';

import SeekVideoElement from '../seek-video/seek-video.component';

const SeekVideo = ({ musicContent }) => (
    <section className="sectionWrap d-flex justify-content-between flex-wrap" id="seekingVideoWrap">
        <SeekVideoElement />
        <div className="seekVideoCont">
            {
                (musicContent)?
                musicContent.map(function(content , index) {
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
                : ''
            }
        </div>
    </section>
);

const mapStateToProps = createStructuredSelector({
    musicContent : selectMusicContent
});

export default connect(mapStateToProps)(SeekVideo);
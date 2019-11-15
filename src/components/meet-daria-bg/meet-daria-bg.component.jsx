import React from "react";
import WOW from "wowjs";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMeetDariaImage } from '../../redux/home/home.selectors';

class MeetDariaBg extends React.Component {

    componentDidMount() {
        const wow = new WOW.WOW({
            live: false
        });
        wow.init();
    }

    render() {
        const { meetDariaImage } = this.props;
        return (
            <div className="meetDariaImgAnim">
                <div className="meetBgEle fadeInDownBig wow" data-wow-duration="1s" id="meetBg1" style={{backgroundImage: `url(${meetDariaImage})`}}></div>
                <div className="meetBgEle fadeInUpBig wow" data-wow-duration="1s" data-wow-delay="0.5s" id="meetBg2" style={{backgroundImage: `url(${meetDariaImage})` }}></div>
                <div className="meetBgEle fadeInDownBig wow" data-wow-duration="1s" data-wow-delay="1s" id="meetBg3" style={{backgroundImage: `url(${meetDariaImage})` }}></div>
                <div className="meetBgEle fadeInUpBig wow" data-wow-duration="1s" data-wow-delay="1.5s" id="meetBg4" style={{backgroundImage: `url(${meetDariaImage})` }}></div>
                <div className="meetBgEle fadeInDownBig wow" data-wow-duration="1s" data-wow-delay="2s" id="meetBg5" style={{backgroundImage: `url(${meetDariaImage})` }}></div>
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    meetDariaImage : selectMeetDariaImage
})

export default connect(mapStateToProps)(MeetDariaBg);
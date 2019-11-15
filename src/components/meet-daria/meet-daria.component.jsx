import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMeetDariaContent } from '../../redux/home/home.selectors';

import MeetDariaBg from '../meet-daria-bg/meet-daria-bg.component';

class MeetDaria extends Component {

    renderContent = () => {

        const { meetDariaContent } = this.props;

        if (isMobile) {
            return <section className="sectionWrap d-flex justify-content-between flex-wrap" id="meetDariaWrap">
                <div className="meetDariaCont">
                    <h2><span>Meet</span> Daria</h2>
                    <div dangerouslySetInnerHTML={{__html: meetDariaContent}} />
                </div>            
            </section>
        }
        return <section className="sectionWrap d-flex justify-content-between flex-wrap" id="meetDariaWrap">
            <div className="meetDariaCont">
                <h2><span>Meet</span> Daria</h2>
                <div dangerouslySetInnerHTML={{__html: meetDariaContent}} />
            </div>
            <MeetDariaBg/>                
        </section>
    }

    render() {
        return this.renderContent();
    }

}

const mapStateToProps = createStructuredSelector({
    meetDariaContent : selectMeetDariaContent
})

export default connect(mapStateToProps)(MeetDaria);
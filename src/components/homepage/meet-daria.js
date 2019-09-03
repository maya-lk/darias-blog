import React, { Component } from "react";
import { isMobile } from "react-device-detect";

import MeetDariaBg from './animations/meet-daria-bg';

class MeetDaria extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {
        }
        
    }

    renderContent = () => {
        if (isMobile) {
            return <section className="sectionWrap d-flex justify-content-between flex-wrap" id="meetDariaWrap">
                <div className="meetDariaCont">
                    <h2><span>Meet</span> Daria</h2>
                    <div dangerouslySetInnerHTML={{__html: this.props.homeParams.meet_daria_content}} />
                </div>            
            </section>
        }
        return <section className="sectionWrap d-flex justify-content-between flex-wrap" id="meetDariaWrap">
            <div className="meetDariaCont">
                <h2><span>Meet</span> Daria</h2>
                <div dangerouslySetInnerHTML={{__html: this.props.homeParams.meet_daria_content}} />
            </div>
            <MeetDariaBg animbg={this.props.homeParams.meet_daria_image}/>                
        </section>
    }

    render() {
        return this.renderContent();
    }

}

export default MeetDaria;
import React, { Component } from "react";
import WOW from "wowjs";

class MeetDariaBg extends Component {

    constructor(){
        super()
        this.state = {
            
        }
    }

    componentDidMount() {
        const wow = new WOW.WOW({
            live: false
        });
        wow.init();
    }

    render() {
        
        return (
            <div className="meetDariaImgAnim">
                <div className="meetBgEle fadeInDownBig wow" data-wow-duration="1s" data-wow-delay="2s" id="meetBg1" style={{backgroundImage: 'url('+this.props.animbg+')'}}></div>
                <div className="meetBgEle fadeInUpBig wow" data-wow-duration="1s" data-wow-delay="3s" id="meetBg2" style={{backgroundImage: 'url('+this.props.animbg+')'}}></div>
                <div className="meetBgEle fadeInDownBig wow" data-wow-duration="1s" data-wow-delay="4s" id="meetBg3" style={{backgroundImage: 'url('+this.props.animbg+')'}}></div>
                <div className="meetBgEle fadeInUpBig wow" data-wow-duration="1s" data-wow-delay="5s" id="meetBg4" style={{backgroundImage: 'url('+this.props.animbg+')'}}></div>
                <div className="meetBgEle fadeInDownBig wow" data-wow-duration="1s" data-wow-delay="6s" id="meetBg5" style={{backgroundImage: 'url('+this.props.animbg+')'}}></div>
            </div>
        )
    }

}

export default MeetDariaBg;
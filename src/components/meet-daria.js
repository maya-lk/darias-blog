import React, { Component } from "react";
import MeetDariaBg from './animations/meet-daria-bg'

class MeetDaria extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {
        }
        
      }

    render() {
        return (
            <section className="sectionWrap d-flex justify-content-between flex-wrap" id="meetDariaWrap">
                <div className="meetDariaCont">
                    <h2><span>Meet</span> Daria</h2>
                    <div dangerouslySetInnerHTML={{__html: this.props.homeParams.meet_daria_cont}} />
                </div>
                <MeetDariaBg animbg={this.props.homeParams.meet_daria_image}/>                
            </section>
        )
    }

}

export default MeetDaria;
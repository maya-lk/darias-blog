import React, { Component } from "react";
import Tab from 'react-bootstrap/Tab';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectThingsTax , selectFancyboxToggle } from '../../redux/home/home.selectors';

import ThingsTaxContent from '../things-tax-content/things-tax-content.component';
import ThingsContent from '../things-content/things-content.component';

class ThingsIDo extends Component {

    render() {

        const { thingsTax , isFancyboxOpen } = this.props;

        const firstTermSlug = (thingsTax ) ? thingsTax[0].slug : '' ;
        const topBarStyle = ( isFancyboxOpen ) ? 'translateX(100%)' : 'translateX(0)' ;
        const bottomBarStyle = ( isFancyboxOpen ) ? 'translateX(-100%)' : 'translateX(0)' ;

        return (
            <section className="sectionWrap d-flex justify-content-between flex-wrap" id="thingsSecWrap">
                <h3 className="mainTitle" style={{ transform : topBarStyle }}>Things i do</h3>
                <Tab.Container id="thingsTabWrap" defaultActiveKey={firstTermSlug}>
                    <ThingsTaxContent />
                    <ThingsContent />
                    {/* <ThingsTaxContent 
                        taxonomyList={this.state.thingsTax}
                        OnClickThings={this.OnClickThings}
                        termSingleImg={this.state.termImage}
                    />
                    <ThingsContent 
                        activeTermID={this.state.termID}
                        taxonomyList={this.state.thingsTax}
                        thingsList={this.state.thingsList}
                        openFancybox={this.OnFancyboxOpen}
                        closeFancybox={this.OnFancyboxClose}
                    /> */}
                </Tab.Container>
                <div className="bottomBar" style={{ transform : bottomBarStyle }}></div>
            </section>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    thingsTax : selectThingsTax,
    isFancyboxOpen : selectFancyboxToggle
});

export default connect(mapStateToProps)(ThingsIDo);
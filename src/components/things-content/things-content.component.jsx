import React, { Component } from "react";
import Tab from 'react-bootstrap/Tab';
import { Scrollbars } from 'react-custom-scrollbars';
import ReactFancyBox from 'react-fancybox';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectThingsTax , selectThings } from '../../redux/home/home.selectors';
import { toggleFancybox } from '../../redux/home/home.actions';

import ThingModalVideo from '../things-modal-video/things-modal-video.component';

import 'react-fancybox/lib/fancybox.css';

class ThingsContent extends Component {

    render() {
        const { thingsTax , toggleFancybox , things  } = this.props;

        return (
            <div className="thingsDoContentWrap">
                <Tab.Content id="thingsContTabs">
                    {
                        (thingsTax)?
                        thingsTax.map((term) => {
                            return(
                                <Tab.Pane eventKey={term.slug} key={term.ID}>
                                    <div className="thingsItemWrap">
                                        <Scrollbars
                                            style={{ height: 768 }}
                                        >
                                            {
                                                (things)?
                                                things.map((thing) => {
                                                    if( thing.tax_term.includes(term.ID) )
                                                        if( thing.type === 'Image' )
                                                            return(                                                    
                                                                <div key={thing.ID} className="thingItem imgItem" data-name={thing.name}>                                                                    
                                                                    <ReactFancyBox
                                                                        thumbnail={thing.image}
                                                                        image={thing.image.url}
                                                                        onOpen={() => toggleFancybox()}
                                                                        onClose={() => toggleFancybox()}/>
                                                                </div>
                                                            )
                                                        else if( thing.type === 'Youtube' )                                                             
                                                            return (
                                                                <div key={thing.ID} className="thingItem youtubeItem">
                                                                    <ThingModalVideo 
                                                                        youtubeID={thing.youtube_id}
                                                                        onOpen={() => toggleFancybox()}
                                                                        onClose={() => toggleFancybox()}
                                                                    />
                                                                </div>
                                                            )
                                                        else
                                                            return <h1>hejsan</h1>
                                                    else 
                                                        return <div key={thing.ID} className="thingItem imgItem"></div>
                                                })
                                                : ''
                                            }
                                        </Scrollbars>
                                    </div>
                                </Tab.Pane>
                            )
                        })
                        : ''
                    }                    
                </Tab.Content>               
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    thingsTax : selectThingsTax,
    things : selectThings
});

const mapDispatchToProps = dispatch => ({
    toggleFancybox : () => dispatch(toggleFancybox())
});

export default connect(mapStateToProps , mapDispatchToProps)(ThingsContent);
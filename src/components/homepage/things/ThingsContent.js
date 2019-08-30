import React, { Component } from "react";
import Tab from 'react-bootstrap/Tab';

class ThingsContent extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {
        }
        
      }

    render() {
        const { thingsList , taxonomyList } = this.props;
        return (
            <div className="thingsDoContentWrap">
                <Tab.Content id="thingsContTabs">
                    {
                        Object.values(taxonomyList).map(function(term) {
                            return(
                                <Tab.Pane eventKey={term.slug}>
                                    {
                                        Object.values(thingsList).map(function(thing) {                        
                                            return(
                                                <div key={thing.id}>{thing.title.rendered}</div>
                                            )
                                        })
                                    }
                                </Tab.Pane>
                            )
                        })
                    }                    
                </Tab.Content>               
            </div>
        )
    }

}

export default ThingsContent;
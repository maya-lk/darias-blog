import React, { Component } from "react";
import Tab from 'react-bootstrap/Tab';
import API from '../../../lib/api';

class ThingsContent extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {            
            thingList : {}
        }
        
        this.getTermRelatedThingsList = this.getTermRelatedThingsList.bind(this);
    }

    componentDidMount(){
        API.get(`wp/v2/things-do?posts_per_page=-1`)
        .then(data => this.setState({
            thingList : data.data
        }))
        .catch(error => console.log(error))
    }

    getTermRelatedThingsList(termID){

        API.get(`wp/v2/things-do?things_tax=${termID}`)
        .then(data => this.setState({
            thingList : data.data
        }))
        .catch(error => console.log(error))
    }

    render() {
        const { taxonomyList } = this.props;

        return (
            <div className="thingsDoContentWrap">
                <Tab.Content id="thingsContTabs">
                    {
                        Object.values(taxonomyList).map((term) => {
                            return(
                                <Tab.Pane eventKey={term.slug} key={term.id}>
                                    <div className="thingsItemWrap">
                                        {
                                            Object.values(this.state.thingList).map((thing) => {
                                                var thingItem = '';
                                                if( thing.things_tax.includes(term.id) ){
                                                    thingItem = thing.slug;
                                                }else{
                                                    thingItem = '';
                                                }
                                                return(
                                                    <div key={thing.id}>{thingItem}</div>
                                                )
                                            })
                                        }
                                    </div>
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
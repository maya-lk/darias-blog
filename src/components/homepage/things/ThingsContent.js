import React, { Component } from "react";
import Tab from 'react-bootstrap/Tab';
import API from '../../../lib/api';
import { Scrollbars } from 'react-custom-scrollbars';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

class ThingsContent extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {            
            thingList : {}
        }
    }

    componentDidMount(){
        API.get(`daria/v2/things?per_page=-1`)
        .then(data => this.setState({
            thingList : data.data
        }))
        .catch(error => console.log(error))
    }

    render() {
        const { taxonomyList , openFancybox , closeFancybox } = this.props;

        return (
            <div className="thingsDoContentWrap">
                <Tab.Content id="thingsContTabs">
                    {
                        Object.values(taxonomyList).map((term) => {
                            return(
                                <Tab.Pane eventKey={term.slug} key={term.id}>
                                    <div className="thingsItemWrap">
                                        <Scrollbars
                                            style={{ height: 768 }}
                                        >
                                            {
                                                Object.values(this.state.thingList).map((thing) => {
                                                    console.log(thing);
                                                    var thingItem = '';
                                                    if( thing.tax_term.includes(term.id) ){
                                                        if( thing.type === 'Image' ){
                                                            thingItem = <ReactFancyBox
                                                                thumbnail={thing.image.url}
                                                                image={thing.image.url}
                                                                onOpen={openFancybox}
                                                                onClose={closeFancybox}/>
                                                        }else if( thing.type === 'Youtube' ){
                                                            thingItem = '<span style="background-image : url(https://img.youtube.com/vi/'+thing.youtube_id+'/maxresdefault.jpg)" class="imgOverlay youtubeComp"><a href="#">Im a video, Play me</a></span>';
                                                        }else if( thing.type === 'Custom' ){
                                                            thingItem = thing.title;
                                                        }else{
                                                            thingItem = '';
                                                        }                                                        
                                                    }else{
                                                        thingItem = '';
                                                    }
                                                    return(                                                    
                                                        <div key={thing.ID} className="thingItem">{thingItem}</div>
                                                    )
                                                })
                                                //<div key={thing.ID} className="thingItem" dangerouslySetInnerHTML={{__html: thingItem}}></div>
                                            }
                                        </Scrollbars>
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
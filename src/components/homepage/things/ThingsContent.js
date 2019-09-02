import React, { Component } from "react";
import Tab from 'react-bootstrap/Tab';
import API from '../../../lib/api';
import { Scrollbars } from 'react-custom-scrollbars';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';


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
        //const { taxonomyList , openFancybox , closeFancybox , openModal , closeModal , show } = this.props;
        const { taxonomyList , openFancybox , closeFancybox , show  } = this.props;

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
                                                    if( thing.tax_term.includes(term.id) )
                                                        if( thing.type === 'Image' )
                                                            return(                                                    
                                                                <div key={thing.ID} className="thingItem imgItem">
                                                                    <ReactFancyBox
                                                                        thumbnail={thing.image.url}
                                                                        image={thing.image.url}
                                                                        onOpen={openFancybox}
                                                                        onClose={closeFancybox}/>
                                                                </div>
                                                            )
                                                        else if( thing.type === 'Youtube' ) 
                                                            return (
                                                                <div key={thing.ID} className="thingItem youtubeItem">
                                                                    <ModalVideo
                                                                        id={thing.ID} 
                                                                        channel='youtube' 
                                                                        isOpen={show} 
                                                                        videoId={thing.youtube_id} 
                                                                        onClose={closeFancybox} 
                                                                    />
                                                                    <button
                                                                        className="openVideoBtn" 
                                                                        onClick={openFancybox} 
                                                                        style={{ backgroundImage : 'url(https://img.youtube.com/vi/'+thing.youtube_id+'/sddefault.jpg)' }}>Im video, Play me</button>
                                                                </div>
                                                            )
                                                        else
                                                            return <h1>hejsan</h1>
                                                    else 
                                                        return <div key={thing.ID} className="thingItem imgItem"></div>
                                                })
                                                //<div key={thing.ID} className="thingItem" dangerouslySetInnerHTML={{__html: thingItem}}></div>
                                                /* var thingItem = '';
                                                    if( thing.tax_term.includes(term.id) ){
                                                        if( thing.type === 'Image' ){
                                                            thingItem = <ReactFancyBox
                                                                thumbnail={thing.image.url}
                                                                image={thing.image.url}
                                                                onOpen={openFancybox}
                                                                onClose={closeFancybox}/>
                                                        }else if( thing.type === 'Youtube' ){
                                                            var poster = 'https://img.youtube.com/vi/'+thing.youtube_id+'/default.jpg';
                                                            var src = 'https://www.youtube.com/watch?v='+thing.youtube_id;
                                                            thingItem = <ModalVideo
                                                                id={ (new Date() *1).toString() }
                                                                src={src}
                                                                poster={poster}
                                                                show={show}
                                                                showModal={openModal}
                                                                handleClose={closeModal}
                                                            />
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
                                                    ) */
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
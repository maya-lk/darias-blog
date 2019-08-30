import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import { BackgroundImage } from "react-image-and-background-image-fade";

class ThingsTaxContent extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {
            
        }
        
    }

    componentDidMount(){

    }

    render() {
        const { taxonomyList , termSingleImg } = this.props;
        const firstTermBackground = (taxonomyList[0] !== undefined ) ? taxonomyList[0].acf.image.url : '' ;

        return (
            <div className="thingsTaxContentWrap d-flex justify-content-between flex-wrap">
                <BackgroundImage
                    id="thingsTaxBg"
                    src={ (termSingleImg === '') ? firstTermBackground : termSingleImg }
                    width="100%"
                    height="100%"
                    lazyLoad
                    transitionTime="3s"
                />
                <div className="thingsTaxWrap">
                    <Nav className="flex-column" id="termList">
                        {
                            Object.values(taxonomyList).map(function(term , index) {
                                let activated = false;
                                let clickedObj = {
                                    id : term.id,
                                    image : term.acf.image.url,
                                    name : term.name,
                                    description : term.description
                                }
                                if( index === 0 ){
                                    activated = true;
                                }else{
                                    activated = false;
                                }
                                return(
                                    <Nav.Link href="#" key={term.id} active={activated} onClick={(e) => this.props.OnClickThings(clickedObj , e)}>{term.name}</Nav.Link>
                                )
                            }.bind(this))
                        }
                    </Nav>
                </div>
                <div className="thingsTaxConWrap">
                    <h4 className="taxTitle">{(taxonomyList[0] !== undefined ) ? taxonomyList[0].name : ''}</h4>
                    <div className="taxDescription">{(taxonomyList[0] !== undefined ) ? taxonomyList[0].description : ''}</div>
                </div>
            </div>
        )
    }

}

export default ThingsTaxContent;
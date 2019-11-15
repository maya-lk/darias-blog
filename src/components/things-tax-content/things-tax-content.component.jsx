import React from "react";
import Nav from 'react-bootstrap/Nav';
import { BackgroundImage } from "react-image-and-background-image-fade";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectThingsTax } from '../../redux/home/home.selectors';

class ThingsTaxContent extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            termImage : null,
            termID : null
        }

        this.OnClickThings = this.OnClickThings.bind(this);
    }

    OnClickThings(obj , e){

        this.setState({
            termImage : obj.image,
            termID : obj.id
        });

        document.getElementsByClassName("taxTitle")[0].innerHTML = obj.name;
        document.getElementsByClassName("taxDescription")[0].innerHTML = obj.description;

        var childElements = document.getElementById("termList").childNodes;
        for (var i = 0; i < childElements.length; i++) {
            childElements[i].classList.remove('active');
        }
        e.target.classList.add('active');

    }

    render() {
        const { thingsTax } = this.props;
        const { termImage } = this.state;
        const firstTermBackground = (thingsTax) ? thingsTax[0].image : '' ;

        return (
            <div className="thingsTaxContentWrap d-flex justify-content-between flex-wrap">
                <BackgroundImage
                    id="thingsTaxBg"
                    src={ (termImage) ? firstTermBackground : termImage }
                    width="100%"
                    height="100%"
                    lazyLoad
                    transitionTime="3s"
                />
                <div className="thingsTaxWrap">
                    <Nav className="flex-column" id="termList" variant="pills">
                        {
                            (thingsTax)?
                            thingsTax.map(function(term , index) {
                                let activated = false;
                                let clickedObj = {
                                    id : term.id,
                                    image : term.image,
                                    name : term.name,
                                    description : term.description
                                }
                                if( index === 0 ){
                                    activated = true;
                                }else{
                                    activated = false;
                                }
                                return(
                                    <Nav.Link eventKey={term.slug} key={term.ID} active={activated} onClick={(e) => this.OnClickThings(clickedObj , e)}>{term.name}</Nav.Link>
                                )
                            }.bind(this))
                            : ''
                        }
                    </Nav>
                </div>
                <div className="thingsTaxConWrap">
                    <h4 className="taxTitle">{(thingsTax) ? thingsTax[0].name : ''}</h4>
                    <div className="taxDescription">{(thingsTax) ? thingsTax[0].description : ''}</div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    thingsTax : selectThingsTax
});

export default connect(mapStateToProps)(ThingsTaxContent);
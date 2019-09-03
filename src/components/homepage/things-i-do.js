import React, { Component } from "react";
import API from '../../lib/api';
import Tab from 'react-bootstrap/Tab'

//Child Components
import ThingsTaxContent from './things/ThingsTaxContent';
import ThingsContent from './things/ThingsContent';

class ThingsIDo extends Component {

    constructor(){
        super()
        this.state = {
            thingsTax : {},
            termImage : '',
            termID : '',
            thingsList : {},
            isFancyboxOpen : false
        }

        this.OnClickThings = this.OnClickThings.bind(this);
        this.OnFancyboxOpen = this.OnFancyboxOpen.bind(this);
        this.OnFancyboxClose = this.OnFancyboxClose.bind(this);
    }

    componentDidMount(){
        //Get Things Taxonomy List
        API.get('wp/v2/things_tax?orderby=id')
        .then(data => this.setState({
            thingsTax : data.data
        }))
        .catch(error => console.log(error))

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

    OnFancyboxOpen(){
        this.setState({
            isFancyboxOpen : true
        });
    }

    OnFancyboxClose(){
        this.setState({
            isFancyboxOpen : false
        });
    }

    render() {

        const firstTermSlug = (this.state.thingsTax[0] !== undefined ) ? this.state.thingsTax[0].slug : '' ;
        const topBarStyle = ( this.state.isFancyboxOpen ) ? 'translateX(100%)' : 'translateX(0)' ;
        const bottomBarStyle = ( this.state.isFancyboxOpen ) ? 'translateX(-100%)' : 'translateX(0)' ;

        return (
            <section className="sectionWrap d-flex justify-content-between flex-wrap" id="thingsSecWrap">
                <h3 className="mainTitle" style={{ transform : topBarStyle }}>Things i do</h3>
                <Tab.Container id="thingsTabWrap" defaultActiveKey={firstTermSlug}>
                    <ThingsTaxContent 
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
                    />
                </Tab.Container>
                <div className="bottomBar" style={{ transform : bottomBarStyle }}></div>
            </section>
        )
    }

}

export default ThingsIDo;
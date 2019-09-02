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
            thingsList : {}
        }

        this.OnClickThings = this.OnClickThings.bind(this);
        this.getTermRelatedThings = this.getTermRelatedThings.bind(this);
    }

    componentDidMount(){
        //Get Things Taxonomy List
        API.get('wp/v2/things_tax?orderby=id')
        .then(data => this.setState({
            thingsTax : data.data
        }))
        .catch(error => console.log(error))

    }
    
    getTermRelatedThings(termID){

        API.get(`wp/v2/things-do?things_tax=${termID}`)
        .then(data => this.setState({
            thingsList : data.data
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

        this.getTermRelatedThings(obj.id);

    }

    render() {

        const firstTermSlug = (this.state.thingsTax[0] !== undefined ) ? this.state.thingsTax[0].slug : '' ;

        return (
            <section className="sectionWrap d-flex justify-content-between flex-wrap" id="thingsSecWrap">
                <h3 className="mainTitle">Things i do</h3>
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
                    />
                </Tab.Container>
                <div className="bottomBar"></div>
            </section>
        )
    }

}

export default ThingsIDo;
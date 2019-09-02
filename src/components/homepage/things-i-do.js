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
    }

    componentDidMount(){
        //Get Things Taxonomy List
        API.get('wp/v2/things-tax?orderby=id')
        .then(data => this.setState({
            thingsTax : data.data
        }))
        .catch(error => console.log(error))

        API.get(`wp/v2/things-do?things-tax=${this.state.termID}`)
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

    }

    render() {

        const firstTermID = (this.state.thingsTax[0] !== undefined ) ? this.state.thingsTax[0].slug : '' ;

        return (
            <section className="sectionWrap d-flex justify-content-between flex-wrap" id="thingsSecWrap">
                <h3 className="mainTitle">Things i do</h3>
                <Tab.Container id="thingsTabWrap" defaultActiveKey={firstTermID}>
                    <ThingsTaxContent 
                        taxonomyList={this.state.thingsTax}
                        OnClickThings={this.OnClickThings}
                        termSingleImg={this.state.termImage}
                    />
                    <ThingsContent 
                        thingsList={this.state.thingsList}
                        taxonomyList={this.state.thingsTax}
                    />
                </Tab.Container>
                <div className="bottomBar"></div>
            </section>
        )
    }

}

export default ThingsIDo;
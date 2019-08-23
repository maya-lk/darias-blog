import React, { Component } from "react";
import InstaFeed from '../components/instafeed';
import MeetDaria from '../components/meet-daria';
import API from '../lib/api';


class HomeComponent extends Component {

  constructor(props, context){
    super(props, context)
    this.state = {
      homepage : ''
    }
    
  }

  componentDidMount(){
    API.get('daria/v2/homepage')
    .then(data => this.setState({
      homepage : data.data
    }))
    .catch(error => console.log(error))
  }
  
  render() {
    return (
        <div className="maniContent">
          <MeetDaria homeParams={this.state.homepage}/>
          <InstaFeed/>
        </div>
    );
  }
}
 
export default HomeComponent;
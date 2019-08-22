import React, { Component } from "react";
import InstaFeed from '../components/instafeed';


class HomeComponent extends Component {
  
  render() {
    return (
        <div className="maniContent">
            HomeComponent
          <InstaFeed/>
        </div>
    );
  }
}
 
export default HomeComponent;
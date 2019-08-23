import React, { Component } from "react";
import API from '../lib/api';
import InstaFeed from '../components/instafeed';
import MeetDaria from '../components/meet-daria';
import SeekVideo from '../components/seeking-video'


class HomeComponent extends Component {

  constructor(props, context){
    super(props, context)
    this.state = {
      homepage : '',
      seekContent : ''
    }
    
  }

  componentDidMount(){
    API.get('daria/v2/homepage')
    .then(data => this.setState({
      homepage : data.data,
      seekContent : data.data.music_content
    }))
    .catch(error => console.log(error))
  }
  
  render() {
    return (
        <div className="maniContent">
          <MeetDaria homeParams={this.state.homepage}/>
          <SeekVideo seekvideoparam={this.state.homepage.music_video} seekVideoContent={this.state.seekContent}/>
          <InstaFeed/>
        </div>
    );
  }
}
 
export default HomeComponent;
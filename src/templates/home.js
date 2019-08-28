import React, { Component } from "react";
import API from '../lib/api';

//Components
import InstaFeed from '../components/instafeed';
import MeetDaria from '../components/meet-daria';
import SeekVideo from '../components/seeking-video';
import SeoHead from '../components/seo-head';
import MainVideo from '../components/main-video';


class HomeComponent extends Component {

  constructor(props, context){
    super(props, context)
    this.state = {
      homepage : '',
      seekContent : '',
      seo : '',
      mainVideo: ''
    }
    
  }

  componentDidMount(){
    API.get('wp/v2/pages/2')
    .then(data => this.setState({
      homepage : data.data.acf,
      seekContent : data.data.acf.music_content,
      seo : data.data.yoast_meta,
      mainVideo: data.data.acf.video
    }))
    .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div className="maniContent">
        <MainVideo videoUrl={this.state.mainVideo} />
        <SeoHead seo={this.state.seo}/>         
        <MeetDaria homeParams={this.state.homepage}/>
        <SeekVideo seekvideoparam={this.state.homepage.music_video} seekVideoContent={this.state.seekContent}/>
        <InstaFeed/>
      </div>
    );
  }
}
 
export default HomeComponent;
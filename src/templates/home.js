import React, { Component } from "react";
import API from '../lib/api';

//Components
import SeoHead from '../components/seo-head';
//import MainVideo from '../components/homepage/main-video';
import MeetDaria from '../components/homepage/meet-daria';
import SeekVideo from '../components/homepage/seeking-video';
import ThingsIDo from '../components/homepage/things-i-do';
import BlogSection from '../components/homepage/blog';
import InstaFeed from '../components/homepage/instafeed';

class HomeComponent extends Component {

  constructor(props, context){
    super(props, context)
    this.state = {
      homepage : '',
      seekContent : '',
      seo : '',
      seekVideos : {},
      blogTitles: {},
      blogPosts : {}
    }
    
  }

  componentDidMount(){
    //Get Home Page Content
    API.get('wp/v2/pages/2')
    .then(data => this.setState({
      homepage : data.data.acf,
      seekContent : data.data.acf.music_content,
      seo : data.data.yoast_meta,
      seekVideos : {
        small : data.data.acf.seek_video_small,
        full : data.data.acf.seek_video_full
      },
      blogTitles : data.data.acf.blog_titles
    }))
    .catch(error => console.log(error))

    //Get Blog Posts
    API.get('wp/v2/posts?per_page=3')
    .then(data => this.setState({
      blogPosts : data.data
    }))
    .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div className="maniContent">
        {/* <MainVideo videoUrl={this.state.homepage.video} videoPoster={this.state.homepage.video_poster} /> */}
        <SeoHead seo={this.state.seo}/>         
        <MeetDaria homeParams={this.state.homepage}/>
        <SeekVideo seekVideosUrls={this.state.seekVideos} seekVideoContent={this.state.seekContent}/>
        <ThingsIDo/>
        <BlogSection blogTitles={this.state.blogTitles} blogContent={this.state.homepage.blog_section_content} blogPosts={this.state.blogPosts}/>
        <InstaFeed/>
      </div>
    );
  }
}
 
export default HomeComponent;
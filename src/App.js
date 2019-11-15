import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom';
import { connect } from 'react-redux';

import API from './lib/api';

import { 
  setSiteLogo , 
  setSmallLogo , 
  setDefaultMenuImage , 
  setSocialMedia , 
  setMenuContent , 
  setMenuLogo,
  setMainMenuItems 
} from './redux/settings/settings.actions';
import { 
  setVideoUrl , 
  setVideoPoster , 
  setMeetDariaContent , 
  setMeetDariaImage , 
  setSeekVideoSmall , 
  setSeekVideoFull , 
  setMusicContent , 
  setBlogTitles , 
  setBlogContent ,
  setBlogPosts , 
  setThingsTax , 
  setThings
} from './redux/home/home.actions';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeComponent from './pages/home/home.component'
import About from './pages/about/about.component'
import WhatIDo from './pages/what-i-do/what-i-do.component'
import Gallery from './pages/gallery/gallery.component'
import Contact from './pages/contact/contact.component'

import './assets/styles/master.css';
 
class App extends Component {

  componentDidMount(){

    const { 
      setSiteLogo , 
      setSmallLogo , 
      setDefaultMenuImage , 
      setSocialMedia , 
      setMenuContent , 
      setMenuLogo , 
      setMainMenuItems ,
      setVideoUrl , 
      setVideoPoster , 
      setMeetDariaContent , 
      setMeetDariaImage , 
      setSeekVideoSmall , 
      setSeekVideoFull , 
      setMusicContent , 
      setBlogTitles , 
      setBlogContent ,
      setBlogPosts , 
      setThingsTax , 
      setThings
    } = this.props;

    //Settings
    API.get('daria/v2/settings')
    .then(function(response){
      setSiteLogo(response.data.site_logo);
      setSmallLogo(response.data.small_logo);
      setDefaultMenuImage(response.data.default_menu_image);
      setSocialMedia(response.data.socialMedia);
      setMenuContent(response.data.menu_content);
      setMenuLogo(response.data.menu_logo);
    })
    .catch(error => console.log(error))

    //Menu Items
    API.get('menus/v1/menus/main-menu')
    .then(function(response){
      setMainMenuItems(response.data.items);
    })
    .catch(error => console.log(error))

    //Home Page Content
    API.get('daria/v2/home')
    .then(function(response){
      setVideoUrl(response.data.video); 
      setVideoPoster(response.data.videoPoster); 
      setMeetDariaContent(response.data.meetDariaContent); 
      setMeetDariaImage(response.data.meetDariaImage); 
      setSeekVideoSmall(response.data.seekVideoSmall); 
      setSeekVideoFull(response.data.seekVideoFull); 
      setMusicContent(response.data.musicContent); 
      setBlogTitles(response.data.blogTitles); 
      setBlogContent(response.data.blogSectionContent);
      setThingsTax(response.data.thingsTax)
    })
    .catch(error => console.log(error))

    //Blog Posts
    API.get('wp/v2/posts?per_page=3')
    .then(function(response){
      setBlogPosts(response.data);
    })
    .catch(error => console.log(error))

    //Set Things
    API.get('daria/v2/things?per_page=-1')
    .then(function(response){
      setThings(response.data);
    })
    .catch(error => console.log(error))

  }

  render() {
    return (
      <div className="siteWrap">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/about" component={About} />
          <Route exact path="/what-i-do" component={WhatIDo} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

const mapdispatchToProps = dispatch => ({
  setSiteLogo : (logo) => dispatch(setSiteLogo(logo)), 
  setSmallLogo : (smallLogo) => dispatch(setSmallLogo(smallLogo)), 
  setDefaultMenuImage : (defaultMenuImage) => dispatch(setDefaultMenuImage(defaultMenuImage)), 
  setSocialMedia : (socialMedia) => dispatch(setSocialMedia(socialMedia)), 
  setMenuContent : (menuContent) => dispatch(setMenuContent(menuContent)), 
  setMenuLogo : (menuLogo) => dispatch(setMenuLogo(menuLogo)),
  setMainMenuItems : (mainMenuItems) => dispatch(setMainMenuItems(mainMenuItems)),  
  setVideoUrl : (video) => dispatch(setVideoUrl(video)), 
  setVideoPoster : (videoPoster) => dispatch(setVideoPoster(videoPoster)), 
  setMeetDariaContent : (meetDariaContent) => dispatch(setMeetDariaContent(meetDariaContent)), 
  setMeetDariaImage : (meetDariaImage) => dispatch(setMeetDariaImage(meetDariaImage)), 
  setSeekVideoSmall : (seekVideoSmall) => dispatch(setSeekVideoSmall(seekVideoSmall)), 
  setSeekVideoFull : (seekVideoFull) => dispatch(setSeekVideoFull(seekVideoFull)), 
  setMusicContent : (musicContent) => dispatch(setMusicContent(musicContent)), 
  setBlogTitles : (blogTitles) => dispatch(setBlogTitles(blogTitles)), 
  setBlogContent : (blogSectionContent) => dispatch(setBlogContent(blogSectionContent)),
  setBlogPosts : (blogPosts) => dispatch(setBlogPosts(blogPosts)),
  setThingsTax : (thingsTax) => dispatch(setThingsTax(thingsTax)),
  setThings : (things) => dispatch(setThings(things))
})
 
export default connect(null , mapdispatchToProps)(App);

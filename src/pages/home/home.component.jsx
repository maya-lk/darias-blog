import React from "react";

import MainVideo from '../../components/main-video/main-video.component';
import MeetDaria from '../../components/meet-daria/meet-daria.component';
import SeekVideo from '../../components/seeking-video/seeking-video.component';
import ThingsIDo from '../../components/things-i-do/things-i-do.component';
import BlogSection from '../../components/blog/blog.component';
import InstaFeed from '../../components/instafeed/instafeed.component';
// import SeoHead from '../components/seo-head';

const HomeComponent = () => (
  <div className="maniContent">
    <MainVideo/>
    <MeetDaria/>
    <SeekVideo/>
    <ThingsIDo/>
    <BlogSection/>
    <InstaFeed/>
  </div>
);
 
export default HomeComponent;
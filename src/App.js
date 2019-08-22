import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './styles/master.css';

import routes from './routes';
 
class App extends Component {
  render() {
    return (
      <div className="siteWrap">
        <Header/>
          {routes}
        <Footer/>
      </div>
    );
  }
}
 
export default App;
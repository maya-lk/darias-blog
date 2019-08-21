import React, { Component } from "react";
import * as ReactBootstrap from 'react-bootstrap';
 
class MenuButton extends Component {
  render() {
    return (
        <ReactBootstrap.Button className="menuToggler" onMouseDown={this.props.handleMouseDown}>
            <span className="bar"></span>
            Menu
        </ReactBootstrap.Button>
    );
  }
}
 
export default MenuButton;
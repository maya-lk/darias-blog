import React, { Component } from "react";
import * as ReactBootstrap from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
class Menu extends Component {

    constructor(){
        super()
        this.state = {
            mainMenuItems:''
        }
    }

    componentDidMount(){
        axios.get('https://mayaprojects.net/darias/blog/wp/wp-json/menus/v1/menus/main-menu')
        .then(data => this.setState({
            mainMenuItems : data.data.items
        }))
        .catch(error => console.log(error))
    }

    

    render() {
        var visibility = "hide";
    
        if (this.props.menuVisibility) {
            visibility = "show";
        }
    
        return (
            <div id="flyoutMenu" className={visibility}>
                {
                    console.log(this.state.mainMenuItems)
                }
                <div className="topBarWrap d-flex justify-content-end">
                    <ReactBootstrap.Button className="menuToggler closeMenu" onMouseDown={this.props.handleMouseDown}>
                        <span className="closeBtn"></span>
                        Menu
                    </ReactBootstrap.Button>
                </div>
                <div className="menuContWrap d-flex justify-content-between">
                    <div className="menuContent">

                    </div>
                    <div className="menuItemsWrap">
                        <span className="menuBg"></span>
                        <Nav defaultActiveKey="/" className="flex-column" id="mainMenu">
                            {
                                // Object.keys(this.state.mainMenuItems).map(function(key , index) {
                                //     return(
                                //         <Nav.Link key={index} as={Link} to="/" href="/">{console.log(this.state.mainMenuItems[key])}</Nav.Link>
                                //     )
                                // })
                                // this.state.mainMenuItems.map(function(menuItem , index) {
                                //     return(
                                //         <Nav.Link key={index} as={Link} to="/" href="/">{console.log(menuItem)}</Nav.Link>
                                //     )
                                // })
                            }
                            <Nav.Link as={Link} to="/" href="/">Home</Nav.Link>
                            {/* <Nav.Link as={Link} to="/" href="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/">Link</Nav.Link>
                            <Nav.Link as={Link} to="/">Link</Nav.Link> */}
                        </Nav>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Menu;
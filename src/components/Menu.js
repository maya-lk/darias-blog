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

        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }

    hoverOn() {
        console.log('Mouse Enter');
    }

    hoverOff() {
        console.log('Mouse Leave');
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
                                Object.values(this.state.mainMenuItems).map(function(menuItem , index) {
                                    var menuName = menuItem.title;
                                    var menuslug = '/';
                                    if (menuName === 'Home') {
                                        menuslug = '/';
                                    } else {
                                        menuslug = '/'+menuName.toLowerCase().replace(" ", "-");
                                    }
                                    console.log(this)
                                    return(
                                        // <Nav.Link key={index} as={Link} to={menuslug} href={menuslug} data-hover={menuItem.hover_image} onMouseOver={this.hoverOn()}>{menuName}</Nav.Link>
                                        <Nav.Link key={index} as={Link} to={menuslug} href={menuslug} data-hover={menuItem.hover_image} ></Nav.Link>
                                    )
                                },this)
                            }
                        </Nav>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Menu;
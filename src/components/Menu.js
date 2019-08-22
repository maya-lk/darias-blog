import React, { Component } from "react";
import * as ReactBootstrap from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import API from '../lib/api';
 
class Menu extends Component {

    constructor(){
        super()
        this.state = {
            mainMenuItems:''
        }

        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.menuclickFunc = this.menuclickFunc.bind(this);
        this.visibility = "hide";
    }
    
    menuclickFunc(){
        this.props.togglemenuFunc();
    }

    hoverOn(e) {
        console.log('Mouse Enter' , e.target);
        var hoverImg = e.target.getAttribute('data-hover');
        console.log('hoverImg' , hoverImg);

        document.getElementById('menuBg').style.backgroundImage = 'url('+hoverImg+')';
    }

    hoverOff() {
        console.log('Mouse Leave');
    }

    componentDidMount(){
        API.get('menus/v1/menus/main-menu')
        .then(data => this.setState({
            mainMenuItems : data.data.items
        }))
        .catch(error => console.log(error))
    }

    render() {
        
        if (this.props.menuVisibility) {
            this.visibility = "show";
        }else{
            this.visibility = "hide";
        }
    
        return (
            <div id="flyoutMenu" className={this.visibility}>
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
                        <span className="menuBg" id="menuBg"></span>
                        <Nav defaultActiveKey="/" className="flex-column" id="mainMenu">                            
                            {
                                Object.values(this.state.mainMenuItems).map(function(menuItem , index) {
                                    var menuName = menuItem.title;
                                    var menuslug = '/';
                                    if (menuName === 'Home') {
                                        menuslug = '/';
                                    } else {
                                        menuslug = '/'+menuName.toLowerCase().replace(/ /g, "-");
                                    }
                                    return(
                                        // <Nav.Link key={index} as={Link} to={menuslug} href={menuslug} data-hover={menuItem.hover_image} onMouseOver={this.hoverOn()}>{menuName}</Nav.Link>
                                        <Nav.Link activeClassname="active" key={index} as={Link} to={menuslug} href={menuslug} data-hover={menuItem.hover_image} onClick={this.menuclickFunc} onMouseOver={this.hoverOn}>                                            
                                            {menuName}
                                        </Nav.Link>
                                    )
                                }.bind(this))
                            }
                        </Nav>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Menu;
import React, { Component } from "react";
import * as ReactBootstrap from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import API from '../lib/api';
 
class Menu extends Component {

    constructor(){
        super()
        this.state = {
            mainMenuItems:'',
            hovered: false,
            defaultMenuImage : ''
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
        var hoverImg = (e.target.getAttribute('data-hover'))? e.target.getAttribute('data-hover') : this.state.defaultMenuImage ;
        document.getElementById('menuBg').style.backgroundImage = 'url('+hoverImg+')';
        // document.getElementById('menuBg').classList.add('show');
        this.setState({hovered: true});
    }

    hoverOff(e) {
        document.getElementById('menuBg').style.backgroundImage = 'url('+this.state.defaultMenuImage+')';
        //this.setState({hovered: false});
    }

    changeBg(element , imageUrl) {
        element.classList.add('show');
    }

    componentDidMount(){
        API.get('menus/v1/menus/main-menu')
        .then(data => this.setState({
            mainMenuItems : data.data.items
        }))
        .catch(error => console.log(error))

        API.get('daria/v2/settings')
        .then(data => this.setState({
            defaultMenuImage : data.data.default_menu_image
        }))
        .catch(error => console.log(error))
    }

    render() {
        var body = document.body;
        if (this.props.menuVisibility) {
            this.visibility = "show";
            body.classList.add("menuOpen");
        }else{
            this.visibility = "hide";
            body.classList.remove("menuOpen");
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
                        <span className="menuBg" id="menuBg" style={{ 
                            //opacity: `${this.state.hovered ? '1' : '0'}`,
                            backgroundImage: 'url(' + this.state.defaultMenuImage + ')', 
                        }}></span>
                        <Nav defaultActiveKey={`${process.env.PUBLIC_URL}`} className="flex-column" id="mainMenu">                            
                            {
                                Object.values(this.state.mainMenuItems).map(function(menuItem , index) {
                                    var menuName = menuItem.title;
                                    var menuslug = `${process.env.PUBLIC_URL}`;
                                    if (menuName === 'Home') {
                                        menuslug = `${process.env.PUBLIC_URL}`;
                                    } else {
                                        menuslug = `${process.env.PUBLIC_URL}/`+menuName.toLowerCase().replace(/ /g, "-");
                                    }
                                    return(
                                        // <Nav.Link key={index} as={Link} to={menuslug} href={menuslug} data-hover={menuItem.hover_image} onMouseOver={this.hoverOn()}>{menuName}</Nav.Link>
                                        <Nav.Link key={index} as={Link} to={menuslug} href={menuslug} data-hover={menuItem.hover_image} onClick={this.menuclickFunc} onMouseOver={this.hoverOn} onMouseOut={this.hoverOff}>
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
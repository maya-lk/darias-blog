import React from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
    selectMenuItems , 
    selectDefaultMenuImage , 
    selectMenuLogo , 
    selectMenuContent , 
    selectSocialMedia , 
    selectMenuVisibility 
} from '../../redux/settings/settings.selectors';
import { toggleMenuVisibility } from '../../redux/settings/settings.actions';
 
class Menu extends React.Component {

    constructor(){
        super()
        this.state = {
            hovered: false,
        }

        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.menuclickFunc = this.menuclickFunc.bind(this);
        this.visibility = "hide";
    }
    
    menuclickFunc(){
        const { toggleMenuVisibility } = this.props;
        toggleMenuVisibility()
    }

    hoverOn(e) {
        var hoverImg = (e.target.getAttribute('data-hover'))? e.target.getAttribute('data-hover') : this.props.defaultMenuImage ;
        document.getElementById('menuBg').style.backgroundImage = 'url('+hoverImg+')';
        this.setState({hovered: true});
    }

    hoverOff(e) {
        document.getElementById('menuBg').style.backgroundImage = 'url('+this.props.defaultMenuImage+')';
    }

    changeBg(element , imageUrl) {
        element.classList.add('show');
    }

    renderContent = () => {

        const { mainMenuItems , toggleMenuVisibility , defaultMenuImage , menuLogo , menuContent , socialMedia , menuVisibility } = this.props;

        var body = document.body;
        if (menuVisibility) {
            this.visibility = "show";
            body.classList.add("menuOpen");
        }else{
            this.visibility = "hide";
            body.classList.remove("menuOpen");
        }


        if (isMobile) {
            return <div id="flyoutMenu" className={this.visibility}>
                <div className="topBarWrap d-flex justify-content-end">
                    <Button className="menuToggler closeMenu" onMouseDown={toggleMenuVisibility}>
                        <span className="closeBtn"></span>
                        Menu
                    </Button>
                </div>
                <div className="menuContWrap d-flex justify-content-between">
                    <div className="menuItemsWrap">
                        <span className="menuBg" id="menuBg" style={{ backgroundImage: 'url(' + defaultMenuImage + ')' }}></span>
                        {
                            (mainMenuItems) ?
                            (
                                <Nav defaultActiveKey="/" className="flex-column" id="mainMenu">                            
                                    {
                                        Object.values(mainMenuItems).map(function(menuItem , index) {
                                            var menuName = menuItem.title;
                                            var menuslug = "/";
                                            if (menuName === 'Home') {
                                                menuslug = "/";
                                            } else {
                                                menuslug = "/"+menuName.toLowerCase().replace(/ /g, "-");
                                            }
                                            return(
                                                <Nav.Link key={index} as={Link} to={menuslug} href={menuslug} data-hover={menuItem.hover_image} onClick={this.menuclickFunc} onMouseOver={this.hoverOn} onMouseOut={this.hoverOff}>
                                                    {menuName}
                                                </Nav.Link>
                                            )
                                        }.bind(this))
                                    }
                                </Nav>
                            )
                            : ''
                        }
                    </div>
                </div>
            </div>
        }
        return <div id="flyoutMenu" className={this.visibility}>
            <div className="topBarWrap d-flex justify-content-end">
                <Button className="menuToggler closeMenu" onMouseDown={toggleMenuVisibility}>
                    <span className="closeBtn"></span>
                    Menu
                </Button>
            </div>
            <div className="menuContWrap d-flex justify-content-between">
                <div className="menuContent">
                    <div className="menuLogo" style={{ backgroundImage : 'url('+menuLogo+')' }}></div>
                    <div className="menuContWrapper">
                        <div className="menuCont" dangerouslySetInnerHTML={{__html: menuContent}} />
                        {
                            (socialMedia)?
                            (
                                <div className="socialMedia">
                                    <a href={(socialMedia.facebook) ? socialMedia.facebook : ''} target="_blank" rel="noopener noreferrer">Facebook</a>
                                    <a href={(socialMedia.instagram) ? socialMedia.instagram : ''} target="_blank" rel="noopener noreferrer">Instagram</a>
                                </div>
                            )
                            : ''
                        }
                    </div>
                </div>
                <div className="menuItemsWrap">
                    <span className="menuBg" id="menuBg" style={{ backgroundImage: 'url(' + defaultMenuImage + ')' }}></span>
                    {
                        (mainMenuItems) ?
                        (
                            <Nav defaultActiveKey="/" className="flex-column" id="mainMenu">                            
                                {
                                    Object.values(mainMenuItems).map(function(menuItem , index) {
                                        var menuName = menuItem.title;
                                        var menuslug = "/";
                                        if (menuName === 'Home') {
                                            menuslug = "/";
                                        } else {
                                            menuslug = "/"+menuName.toLowerCase().replace(/ /g, "-");
                                        }
                                        return(
                                            <Nav.Link key={index} as={Link} to={menuslug} href={menuslug} data-hover={menuItem.hover_image} onClick={this.menuclickFunc} onMouseOver={this.hoverOn} onMouseOut={this.hoverOff}>
                                                {menuName}
                                            </Nav.Link>
                                        )
                                    }.bind(this))
                                }
                            </Nav>
                        )
                        : ''
                    }
                </div>
            </div>
        </div>
    }

    render() {
        return this.renderContent();
    }
}

const mapStateToProps = createStructuredSelector({
    mainMenuItems : selectMenuItems,
    defaultMenuImage : selectDefaultMenuImage,
    menuLogo : selectMenuLogo,
    menuContent : selectMenuContent,
    socialMedia : selectSocialMedia,    
    menuVisibility : selectMenuVisibility
});

const mapDispatchToProps = dispatch => ({
    toggleMenuVisibility : () => dispatch(toggleMenuVisibility())
});
 
export default connect(mapStateToProps , mapDispatchToProps)(Menu);
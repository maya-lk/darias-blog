import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter , faFacebookF , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Creator from '../images/maya.png';
import API from '../lib/api';
import { isMobile } from "react-device-detect";

const twitter = <FontAwesomeIcon icon={faTwitter} />
const facebook = <FontAwesomeIcon icon={faFacebookF} />
const instagram = <FontAwesomeIcon icon={faInstagram} />

export default class Footer extends React.Component{
    constructor(){
        super()
        this.state = {
            settings:[]
        }
    }
    

    componentDidMount(){
        API.get('daria/v2/settings')
        .then(data => this.setState({
            settings : [
                {
                    small_logo : data.data.small_logo,
                    facebook : data.data.facebook,
                    instagram : data.data.instagram,
                    twitter : data.data.twitter
                }
            ]
        }))
        .catch(error => console.log(error))
    }

    renderContent = () => {
        if (isMobile) {
            return <footer className="footer">
                <div className="topfooterWrap d-flex justify-content-between">
                    <div className="footerLogoWrap d-flex">
                        <div className="logo">
                            <span className="outlineText">Hi</span>
                            <span>Im Daria</span>
                        </div>                        
                    </div>
                </div>
                <div className="bottomFooterLink d-flex justify-content-between">
                    <Nav as="ul" className="footerNav">
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to={`${process.env.PUBLIC_URL}`}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to={`${process.env.PUBLIC_URL}/about`}>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to={`${process.env.PUBLIC_URL}/what-i-do`}>What i do</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to={`${process.env.PUBLIC_URL}/gallery`}>Gallery</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to={`${process.env.PUBLIC_URL}/contact`}>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav as="ul" className="socialLinks">
                        <Nav.Item as="li">
                            {
                                this.state.settings.map((setting , index) => {
                                    return(
                                        <Nav.Link key={index} href={setting.instagram} target="_blank" rel="noopener noreferrer">{instagram}</Nav.Link>
                                    )
                                })
                            }
                        </Nav.Item>
                        <Nav.Item as="li">
                            {
                                this.state.settings.map((setting , index) => {
                                    return(
                                        <Nav.Link key={index} href={setting.twitter} target="_blank" rel="noopener noreferrer">{twitter}</Nav.Link>
                                    )
                                })
                            }
                        </Nav.Item>
                        <Nav.Item as="li">
                            {
                                this.state.settings.map((setting , index) => {
                                    return(
                                        <Nav.Link key={index} href={setting.facebook} target="_blank" rel="noopener noreferrer">{facebook}</Nav.Link>
                                    )
                                })
                            }
                        </Nav.Item>
                    </Nav>
                    <div className="cpyrights">
                        All rights reserved 2019
                        {
                            this.state.settings.map((setting , index) => {
                                return(
                                    <img key={index} src={setting.small_logo} alt="Small Logo" />
                                )
                            })
                        } 
                    </div>      
                    <div className="creator">
                        Mixed & Mastered By <a href="https://www.maya.lk/" target="_blank" rel="noopener noreferrer"><img src={Creator} alt="Maya" /></a>
                    </div>
                </div>
            </footer>
        }
        return <footer className="footer">
                <div className="topfooterWrap d-flex justify-content-between">
                    <div className="footerLogoWrap d-flex">
                        <div className="logo">
                            <span className="outlineText">Hi</span>
                            <span>Im Daria</span>
                        </div>
                        <Nav as="ul" className="socialLinks">
                            <Nav.Item as="li">
                                {
                                    this.state.settings.map((setting , index) => {
                                        return(
                                            <Nav.Link key={index} href={setting.instagram} target="_blank" rel="noopener noreferrer">{instagram}</Nav.Link>
                                        )
                                    })
                                }
                            </Nav.Item>
                            <Nav.Item as="li">
                                {
                                    this.state.settings.map((setting , index) => {
                                        return(
                                            <Nav.Link key={index} href={setting.twitter} target="_blank" rel="noopener noreferrer">{twitter}</Nav.Link>
                                        )
                                    })
                                }
                            </Nav.Item>
                            <Nav.Item as="li">
                                {
                                    this.state.settings.map((setting , index) => {
                                        return(
                                            <Nav.Link key={index} href={setting.facebook} target="_blank" rel="noopener noreferrer">{facebook}</Nav.Link>
                                        )
                                    })
                                }
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="creator">
                        Mixed & Mastered By <a href="https://www.maya.lk/" target="_blank" rel="noopener noreferrer"><img src={Creator} alt="Maya" /></a>
                    </div>
                </div>
                <div className="bottomFooterLink d-flex justify-content-between">
                    <Nav as="ul" className="footerNav">
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to={`${process.env.PUBLIC_URL}`}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to={`${process.env.PUBLIC_URL}/about`}>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to={`${process.env.PUBLIC_URL}/what-i-do`}>What i do</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to={`${process.env.PUBLIC_URL}/gallery`}>Gallery</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to={`${process.env.PUBLIC_URL}/contact`}>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="cpyrights">
                        All rights reserved 2019
                        {
                            this.state.settings.map((setting , index) => {
                                return(
                                    <img key={index} src={setting.small_logo} alt="Small Logo" />
                                )
                            })
                        } 
                    </div>
                </div>
            </footer>
    }

    render() {
        return this.renderContent();
    }
}
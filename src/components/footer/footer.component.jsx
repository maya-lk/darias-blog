import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter , faFacebookF , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSocialMedia , selectSmallLogo } from '../../redux/settings/settings.selectors';

import Creator from '../../assets/images/maya.png';

const twitter = <FontAwesomeIcon icon={faTwitter} />
const facebook = <FontAwesomeIcon icon={faFacebookF} />
const instagram = <FontAwesomeIcon icon={faInstagram} />

class Footer extends React.Component{

    renderContent = () => {

        const { socialMedia , smallLogo } = this.props;

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
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/what-i-do">What i do</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {
                        (socialMedia)?
                        (
                            <Nav as="ul" className="socialLinks">
                                <Nav.Item as="li">
                                    <Nav.Link href={(socialMedia.instagram) ? socialMedia.instagram : '#'} target="_blank" rel="noopener noreferrer">{instagram}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href={(socialMedia.twitter) ? socialMedia.twitter : '#'} target="_blank" rel="noopener noreferrer">{twitter}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href={(socialMedia.facebook) ? socialMedia.facebook : '#'} target="_blank" rel="noopener noreferrer">{facebook}</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        )
                        : ''
                    }
                    <div className="cpyrights">
                        All rights reserved 2019
                        <img src={smallLogo} alt="Small Logo" /> 
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
                        {
                            (socialMedia)?
                            (
                                <Nav as="ul" className="socialLinks">
                                    <Nav.Item as="li">
                                        <Nav.Link href={(socialMedia.instagram) ? socialMedia.instagram : '#'} target="_blank" rel="noopener noreferrer">{instagram}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link href={(socialMedia.twitter) ? socialMedia.twitter : '#'} target="_blank" rel="noopener noreferrer">{twitter}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link href={(socialMedia.facebook) ? socialMedia.facebook : '#'} target="_blank" rel="noopener noreferrer">{facebook}</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            )
                            : ''
                        }
                    </div>
                    <div className="creator">
                        Mixed & Mastered By <a href="https://www.maya.lk/" target="_blank" rel="noopener noreferrer"><img src={Creator} alt="Maya" /></a>
                    </div>
                </div>
                <div className="bottomFooterLink d-flex justify-content-between">
                    <Nav as="ul" className="footerNav">
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/what-i-do">What i do</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="cpyrights">
                        All rights reserved 2019
                        <img src={smallLogo} alt="Small Logo" />
                    </div>
                </div>
            </footer>
    }

    render() {
        return this.renderContent();
    }
}

const mapStateToProps = createStructuredSelector({
    socialMedia : selectSocialMedia,
    smallLogo : selectSmallLogo
});

export default connect(mapStateToProps)(Footer);
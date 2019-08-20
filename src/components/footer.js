import React from 'react'
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter , faFacebookF , faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'

const twitter = <FontAwesomeIcon icon={faTwitter} />
const facebook = <FontAwesomeIcon icon={faFacebookF} />
const instagram = <FontAwesomeIcon icon={faInstagram} />

export default (props) => (
    <footer className="footer">
        <div className="topfooterWrap d-flex justify-content-between">
            <div className="footerLogoWrap d-flex">
                <div className="logo">
                    <span className="outlineText">Hi</span>
                    <span>Im Daria</span>
                </div>
                <Nav as="ul" className="socialLinks">
                    <Nav.Item as="li">
                        <Nav.Link href={props.instagram} target="_blank" rel="noopener noreferrer">{instagram}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href={props.twitter} target="_blank" rel="noopener noreferrer">{twitter}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href={props.facebook} target="_blank" rel="noopener noreferrer">{facebook}</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className="creator">
                Mixed & Mastered By <a href="https://www.maya.lk/" target="_blank" rel="noopener noreferrer"><img src="images/maya.png" alt="Maya" /></a>
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
            <div className="cpyrights">All rights reserved 2019 <img src={props.url} alt={props.alt} /></div>
        </div>
    </footer>
);
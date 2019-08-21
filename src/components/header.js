import React from 'react'
import { Navbar } from 'react-bootstrap'
import axios from 'axios'
import MenuButton from './MenuButton'
import Menu from './Menu'

export default class Header extends React.Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            visible: false,
            settings:[]
        }

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();
        
        console.log("clicked");
        e.stopPropagation();
    }
     
    toggleMenu() {
        this.setState(
            {
                visible: !this.state.visible
            }
        );
    }
    

    componentDidMount(){
        axios.get('https://mayaprojects.net/darias/blog/wp/wp-json/daria/v2/settings')
        .then(data => this.setState({
            settings : [
                {
                    site_logo : data.data.site_logo
                }
            ]
        }))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <header className="header">
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
                <Navbar className="mainNavbar justify-content-between">
                    <Navbar.Brand href="/">
                        {
                            this.state.settings.map((setting , index) => {
                                return(
                                    <img key={index} src={setting.site_logo} alt="" />
                                )
                            })
                        }
                    </Navbar.Brand>
                    <MenuButton handleMouseDown={this.handleMouseDown}/>
                </Navbar>
            </header>
        )
    }
}


// export default (props) => (
//     <header className="header">
//         <Navbar className="mainNavbar justify-content-between">
//             <Navbar.Brand href="/">
//                 <img src={props.url} alt={props.alt} />
//             </Navbar.Brand>
//             <Button className="menuToggler">Menu</Button>
//         </Navbar>
//     </header>
// );
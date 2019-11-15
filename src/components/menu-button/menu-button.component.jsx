import React from "react";
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import { toggleMenuVisibility } from '../../redux/settings/settings.actions';

const MenuButton = ({ toggleMenuVisibility }) => {
  
  return(
    <Button className="menuToggler" onMouseDown={toggleMenuVisibility}>
      <span className="bar"></span>
      Menu
    </Button>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleMenuVisibility : () => dispatch(toggleMenuVisibility())
});
 
export default connect(null , mapDispatchToProps)(MenuButton);
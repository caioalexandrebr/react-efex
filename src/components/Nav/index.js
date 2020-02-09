import './index.css';
import React, { Component } from 'react';
import { pushRotate as Menu } from 'react-burger-menu';

class Nav extends Component {
  render () {
    return (
      <Menu id="slide">
        <a href="#home" className="bm-item" tabindex="0"><span>Home</span></a>
        <a href="#home" className="bm-item" tabindex="0"><span>About</span></a>
        <a href="#home" className="bm-item" tabindex="0"><span>Team</span></a>
        <a href="#home" className="bm-item" tabindex="0"><span>Contact</span></a>
      </Menu>
    )
  }
}

export default Nav;
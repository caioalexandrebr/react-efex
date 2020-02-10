import './index.css';
import React, { Component } from 'react';
import { pushRotate as Menu } from 'react-burger-menu';

class Nav extends Component {
  render () {
    return (
      <Menu id="slide">
        <a href="#home" className="bm-item"><span>Home</span></a>
        <a href="#home" className="bm-item"><span>About</span></a>
        <a href="#home" className="bm-item"><span>Team</span></a>
        <a href="#home" className="bm-item"><span>Contact</span></a>
      </Menu>
    )
  }
}

export default Nav;
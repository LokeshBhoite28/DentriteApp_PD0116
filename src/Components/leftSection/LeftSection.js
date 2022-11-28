import React, { Component } from 'react';
import SideMenu from './SideMenu';


import './leftSection.css';

class LeftSection extends Component {
  render() {
    return (
      <div className="left-section">
        <SideMenu />
        <div className='pic'>
        
        </div>
       
      </div>
    );
  }
}
export default LeftSection;

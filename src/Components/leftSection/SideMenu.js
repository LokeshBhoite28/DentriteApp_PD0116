import React, { Component } from 'react';
import { RiHome3Fill,RiSearchLine,RiHeart3Fill,RiPlayCircleFill } from "react-icons/ri";
import Nav from 'react-bootstrap/Nav';
import './sideMenu.css';



class SideMenu extends Component {

  render = () => {
    return (
      <div className="user-container">
        <ul className='side-menu-container'>
          <Nav.Link className='menu-item' href="/home"><RiHome3Fill/>  Home</Nav.Link>
          <Nav.Link className='menu-item' href="/Search"><RiSearchLine/> Search</Nav.Link>
          <Nav.Link className='menu-item' href="/favourites"><RiHeart3Fill/> Favourites</Nav.Link>
          <Nav.Link className='menu-item' href="/playlist"><RiPlayCircleFill/> PlayList</Nav.Link>
        </ul>
      </div>

    );
  };
}


export default SideMenu;

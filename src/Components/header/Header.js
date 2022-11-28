import React, { Component } from "react";
import './header.css';
import music1 from './music_1.png';
import music2 from './music_3.png';
import { RiSunFill,RiMoonFill } from "react-icons/ri";

class Header extends Component {
    render() {
        return (
            <div className="main-header">
                <img className="photo" src={music1} alt="img2" />
                <div className='header-text'>
                    <h1>Your favourite tunes</h1>
                    <h4>All <RiSunFill style={{color:'yellow',fontSize:'40px'}} /> and all <RiMoonFill style={{color:'grey',fontSize:'40px'}}/></h4>
                </div>
            </div>
        );
    }
}

export default Header;
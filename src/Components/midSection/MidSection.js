import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import './midSection.css';
import Home from '../homeSection/Home';

class MidSection extends Component {
  render() {
    return (
      <div className="mid-section-container">
        <Switch>
          <Route path="/Home" component={Home} />
        </Switch>
        
      </div>
    );
  };
}



export default MidSection;
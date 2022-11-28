import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { RiStarLine, RiStarFill } from "react-icons/ri";
import MusicService from '../Servies/MusicService';

class MusicCard extends Component {

  constructor(props){
    super(props)
  }

  addFavourite = (Key) => {
    MusicService.getSongDetail(Key).then((response) => {
      console.log(response.data)
      window.localStorage.setItem('favourite', response.data);
    })

  }

  render() {
    return (
      <Card className="font-semibold text-lg text-truncate" style={{ width: '10rem', height: '18rem' }}>
        <Card.Img variant="top" src={this.props.url} />
        <Card.Body>
          <Card.Title style={{ fontSize: '15px' }}>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.artist}
          </Card.Text>
          <Button className='primary'>Play</Button>
          <RiStarLine style={{ textAlign: 'right' }} onClick={() => this.addFavourite(this.props.Key)} />
        </Card.Body>
      </Card>
    );
  }
}

export default MusicCard;
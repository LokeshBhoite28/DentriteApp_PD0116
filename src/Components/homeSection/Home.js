import React, { Component } from 'react';
import MusicCard from '../items/MusicCard';
import MusicService from '../Servies/MusicService';
import ListGroup from 'react-bootstrap/ListGroup';
import './home.css';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            track: [],
            images: []
        }
    }

    componentDidMount = () => {

        MusicService.getMusicList().then((response) => {
            console.log(response.data.tracks)
            const Titles = response.data.tracks


            this.setState({
                track: Titles

            })

        }).catch(function (error) {
            console.error(error);
        })
    }


    render() {
        return (
            <div>
                <div className='musicList'>
                    <h5 className="font-bold text-xl z-10 text-left mt-4 mb-10" style={{color:'grey'}}>
                        Top Charts
                    </h5>
                    <ListGroup horizontal>
                        {
                            this.state.track.map((t, index) =>
                                <ListGroup.Item key={index}>
                                    <MusicCard Key={t.key} title={t.title} url={t.images.background} artist={t.artists[0].alias} />
                                </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default Home;
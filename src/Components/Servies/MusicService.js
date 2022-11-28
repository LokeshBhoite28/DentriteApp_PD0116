import axios from 'axios';

const base_url='https://shazam.p.rapidapi.com';

class MusicService{

    getMusicList(){
        return axios.get(base_url+"/charts/track",
       
        { headers: {
            'X-RapidAPI-Key': 'enter_key',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
          },
          params: {locale: 'en-US', pageSize: '20', startFrom: '0'}
        })
    }

    getSongDetail(key){
        return axios.get(base_url+"/songs/get-details",
       
        { headers: {
            'X-RapidAPI-Key': 'enter_key',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
          },
          params: {key: {key}, locale: 'en-US'},
        })
    }
}

export default new MusicService();

import axios from 'axios';

const base_url='https://shazam.p.rapidapi.com';

class MusicService{

    getMusicList(){
        return axios.get(base_url+"/charts/track",
       
        { headers: {
            'X-RapidAPI-Key': '7087775113mshe3bb78064c4e640p1b161fjsn903af094631c',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
          },
          params: {locale: 'en-US', pageSize: '20', startFrom: '0'}
        })
    }

    getSongDetail(key){
        return axios.get(base_url+"/songs/get-details",
       
        { headers: {
            'X-RapidAPI-Key': '7087775113mshe3bb78064c4e640p1b161fjsn903af094631c',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
          },
          params: {key: {key}, locale: 'en-US'},
        })
    }

    // getRecommended(){
    //     return axios.get(base_url+"/songs/list-recommendations",
       
    //     { headers: {
    //         'X-RapidAPI-Key': '7087775113mshe3bb78064c4e640p1b161fjsn903af094631c',
    //         'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    //       },
    //       params: {key: '501844142', locale: 'en-US'},
    //     })
    // }
}

export default new MusicService();
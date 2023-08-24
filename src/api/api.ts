import axios from "axios";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'live_0agdR6MKs2xLWcYUBzYS16bZi9yvLL8sEeNzzaGbjNkWVJ6cs1CLVdEzBLKoVWVq';

const subId = "userOne1";
export const api = {
    async getImage(){
        return await axios.get('/images/search')
    },
    async getHistory(){
        return await axios.get(`/votes?limit=4&order=DESC&sub_id=${subId}`)
    },
    async vote(id: string, value: number){
        return await axios.post('/votes', {"image_id":`${id}`,"sub_id":subId,"value": value})
    },
    async addFav(id: string){
       return await axios.post('/favourites', {"image_id":`${id}`,"sub_id":subId})
    },
    async removeFav(idFav: number){
        return await axios.delete(`/favourites/${idFav}`)
    }
}
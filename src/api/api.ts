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
    },
    async getBreed(breed: string | undefined | string[]){
        return await axios(`/images/search?breed_ids=${breed}&limit=10`);
    },
	async getBreedsImages(limit: number){
        return await axios(`/images/search?has_breeds=1&limit=${limit}`);
    },
	async getImages(limit: number, order: string, type: string, page:number, breed?: string){
		console.log(limit, order, type, page,  breed)
		return await axios(`/images/search?limit=${limit}&order=${order}&mime_types=${type}&page=${page}${breed?'&breed_ids='+breed:''}`);
	}
}
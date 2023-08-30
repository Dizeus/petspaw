import axios from "axios";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'live_0agdR6MKs2xLWcYUBzYS16bZi9yvLL8sEeNzzaGbjNkWVJ6cs1CLVdEzBLKoVWVq';

const subId = "tester1234";

export const api = {
    async getHistory(limit: number){
        return await axios.get(`/votes?limit=${limit}&order=DESC&sub_id=${subId}`)
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
	async getBreedImages(limit: number, breed: string | undefined | string[]){
        return await axios.get(`/images/search?&breed_ids=${breed}&limit=${limit}`);
    },
	async getBreeds(){
        return await axios.get(`/breeds`);
    },
	async getImages(limit: number = 10, order: string = "RAND", type: string = "gif,png,jpg", page:number=1, breed?: string, has_breeds?:boolean){
		return await axios.get(`/images/search?limit=${limit}&order=${order}&mime_types=${type}&page=${page}${breed?'&breed_ids='+breed:''}${has_breeds?'&has_breeds=1':''}`);
	},
	async uploadFile(formData: FormData){
		return await axios.post("/images/upload", formData, { headers: { "Content-Type": "multipart/form-data" } })	
	},
	async getFavourites(){
		return await axios.get("/favourites")	
	},
}
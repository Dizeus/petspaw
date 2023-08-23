import {VoteAction, VoteActionTypes, VoteState} from "../../types/vote";
import {Dispatch} from "react";
import axios from "axios";
import { setHistory, setImage, setInFavourites } from "../actions-creators/vote";
const initialState: VoteState = {
	image: null,
	history: [],
	likes: [],
	favourites: [],
	dislikes: [],
	inFavourites: null,
}

export const voteReducer = (state = initialState, action: VoteAction): VoteState => {
    switch (action.type) {
		case VoteActionTypes.SET_HISTORY:
            return {...state, history: [...action.payload, ...state.history?.length>0?[...state.history].splice(0,3):state.history]}
		case VoteActionTypes.SET_IMAGE:
            return {...state, inFavourites: null, image: action.payload}
		case VoteActionTypes.SET_IN_FAVOURITES:
            return {...state, inFavourites: action.payload}		
        default:
            return state

    }
}



export const initializeVoting = () => async (dispatch: Dispatch<VoteAction>) =>{
    try {
		const responseImage = await axios.get('https://api.thecatapi.com/v1/images/search', {headers:{ 'x-api-key' : 'live_0agdR6MKs2xLWcYUBzYS16bZi9yvLL8sEeNzzaGbjNkWVJ6cs1CLVdEzBLKoVWVq' }})
		dispatch(setImage(responseImage.data[0]))
        const responseHistory  = await axios.get('https://api.thecatapi.com/v1/votes?limit=4&order=DESC&sub_id=userOne1', {headers:{ 'x-api-key' : 'live_0agdR6MKs2xLWcYUBzYS16bZi9yvLL8sEeNzzaGbjNkWVJ6cs1CLVdEzBLKoVWVq' }})
		dispatch(setHistory(responseHistory.data))
    } catch (e) {

    }

}

export const vote = (id: string, value: number) => async (dispatch: Dispatch<VoteAction>) =>{
    try {
		const response = await axios.post('https://api.thecatapi.com/v1/votes', {"image_id":`${id}`,"sub_id":"userOne1","value": value}, {headers:{ 'x-api-key' : 'live_0agdR6MKs2xLWcYUBzYS16bZi9yvLL8sEeNzzaGbjNkWVJ6cs1CLVdEzBLKoVWVq' }})
		if(response.status === 201){
			if(value<2){
				const responseImage = await axios.get('https://api.thecatapi.com/v1/images/search', {headers:{ 'x-api-key' : 'live_0agdR6MKs2xLWcYUBzYS16bZi9yvLL8sEeNzzaGbjNkWVJ6cs1CLVdEzBLKoVWVq' }})
				dispatch(setImage(responseImage.data[0]))
			}
			dispatch(setHistory([{id: response.data.id, sub_id: response.data.sub_id, value: response.data.value, image_id: response.data.image_id, created_at: String(Date())}]))
		}
    } catch (e) {
		
    }

}
export const addFav = (id: string, inFav: number | null) => async (dispatch: Dispatch<VoteAction>) =>{
	try {
		if(!inFav){
			const response = await axios.post('https://api.thecatapi.com/v1/favourites', {"image_id":`${id}`,"sub_id":"userOne1"}, {headers:{ 'x-api-key' : 'live_0agdR6MKs2xLWcYUBzYS16bZi9yvLL8sEeNzzaGbjNkWVJ6cs1CLVdEzBLKoVWVq' }})
			if(response.status === 200){
				dispatch(setInFavourites(response.data.id))
			}
		}else{
			const response = await axios.delete(`https://api.thecatapi.com/v1/favourites/${inFav}`, {headers:{ 'x-api-key' : 'live_0agdR6MKs2xLWcYUBzYS16bZi9yvLL8sEeNzzaGbjNkWVJ6cs1CLVdEzBLKoVWVq' }})
			if(response.status === 200){
				dispatch(setInFavourites(null))
			}
		}
		
    } catch (e) {
		
    }
}
import {VoteAction, VoteActionTypes, VoteState} from "../../types/vote";
import {Dispatch} from "react";
import axios from "axios";
import { setHistory, setImage } from "../actions-creators/vote";
const initialState: VoteState = {
	image: null,
	history: [],
	likes: [],
	favourites: [],
	dislikes: [],
}

export const voteReducer = (state = initialState, action: VoteAction): VoteState => {
    switch (action.type) {
        case VoteActionTypes.FAV:
            return {...state, favourites: [...state.favourites, action.payload]}
		case VoteActionTypes.DISLIKE:
            return {...state, dislikes: [...state.dislikes, action.payload]}
		case VoteActionTypes.LIKE:
            return {...state, likes: [...state.likes, action.payload]}
		case VoteActionTypes.SET_HISTORY:
            return {...state, history: action.payload}
		case VoteActionTypes.SET_IMAGE:
            return {...state, image: action.payload}	
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
		console.log(response)
		if(response.status === 201){
			const responseImage = await axios.get('https://api.thecatapi.com/v1/images/search', {headers:{ 'x-api-key' : 'live_0agdR6MKs2xLWcYUBzYS16bZi9yvLL8sEeNzzaGbjNkWVJ6cs1CLVdEzBLKoVWVq' }})
			dispatch(setImage(responseImage.data[0]))
			const responseHistory  = await axios.get('https://api.thecatapi.com/v1/votes?limit=4&order=DESC&sub_id=userOne1', {headers:{ 'x-api-key' : 'live_0agdR6MKs2xLWcYUBzYS16bZi9yvLL8sEeNzzaGbjNkWVJ6cs1CLVdEzBLKoVWVq' }})
			dispatch(setHistory(responseHistory.data))
		}
    } catch (e) {

    }

}
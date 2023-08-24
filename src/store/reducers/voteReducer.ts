import {VoteAction, VoteActionTypes, VoteState} from "../../types/vote";
import {Dispatch} from "react";
import { setHistory, setImage, setInFavourites } from "../actions-creators/vote";
import {api} from "@/api/api";
const initialState: VoteState = {
	image: null,
	history: [],
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
		const responseImage = await api.getImage()
		dispatch(setImage(responseImage.data[0]))
        const responseHistory  = await api.getHistory()
		dispatch(setHistory(responseHistory.data))
    } catch (e) {

    }
}

export const vote = (id: string, value: number) => async (dispatch: Dispatch<VoteAction>) =>{
    try {
		const response = await api.vote(id, value)
		if(response.status === 201){
			if(value<2){
				//if not favourites actions
				const responseImage = await api.getImage()
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
			const response = await api.addFav(id)
			if(response.status === 200){
				dispatch(setInFavourites(response.data.id))
			}
		}else{
			const response = await api.removeFav(inFav)
			if(response.status === 200){
				dispatch(setInFavourites(null))
			}
		}
		
    } catch (e) {
		console.log()
    }
}
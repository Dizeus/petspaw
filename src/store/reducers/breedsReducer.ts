import {BreedsAction, BreedsActionTypes, BreedsState} from "../../types/breeds";
import {Dispatch} from "react";
import {api} from "@/api/api";
import {setImages} from "@/store/actions-creators/breeds";


const initialState: BreedsState = {
    currBreed: null,
    images: [],
}

export const breedsReducer = (state = initialState, action: BreedsAction): BreedsState => {
    switch (action.type) {
        case BreedsActionTypes.SORT_ALL:
			const sortedArray = state.images.sort((a, b)=>
				action.payload === 'DESC'?
				a.breeds[0].name > b.breeds[0].name?-1:1
				:a.breeds[0].name < b.breeds[0].name?-1:1
			)
            return {...state, images: sortedArray}
		case BreedsActionTypes.SET_BREED:
            return {...state, currBreed: action.payload}
		case BreedsActionTypes.SET_IMAGES:
            return {...state, images: action.payload}		
        default:
            return state

    }
}


export const initializeBreeds = () => async (dispatch: Dispatch<BreedsAction>) =>{
    try {
		const responseImages = await api.getBreedsImages(10)
		dispatch(setImages(responseImages.data))
    } catch (e) {
		console.error(e)
    }
}

export const onSelectLimit = (limit: number) => async (dispatch: Dispatch<BreedsAction>) =>{
    try {
        const responseImages = await api.getBreedsImages(limit)
		dispatch(setImages(responseImages.data))
    } catch (e) {
		console.error(e) 
    }
}
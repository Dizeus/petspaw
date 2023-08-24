import {BreedsAction, BreedsActionTypes, BreedsState} from "../../types/breeds";
import {Dispatch} from "react";
import {api} from "@/api/api";
import {setBreeds, setImages} from "@/store/actions-creators/breeds";
import { CatImage } from "@/types/CatImage";


const initialState: BreedsState = {
    breeds: [],
    currBreed: null,
    limit: 10,
    sortType: '',
    images: [[]]
}

export const breedsReducer = (state = initialState, action: BreedsAction): BreedsState => {
    switch (action.type) {
        case BreedsActionTypes.SET_BREEDS:
            return {...state, breeds: action.payload}
        case BreedsActionTypes.SORT_ALL:
            return {...state, images: [[]]}
        case BreedsActionTypes.SET_LIMIT:
            return {...state, limit: action.payload}
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
        const responseBreeds = await api.getBreeds()
		const responseImages = await api.getBreedsImages()

		const images: [CatImage[]] = [[]]
		for(let i: number = 0; i<10; i+=5){
			images.push(responseImages.data.slice(i, i+5))
		}
		images.shift()
		dispatch(setImages(images))
		console.log(responseImages.data)
        dispatch(setBreeds(responseBreeds.data))
    } catch (e) {

    }
}

export const onSelectBreed = (breed: string) => async (dispatch: Dispatch<BreedsAction>) =>{
    try {
        //const responseBreed = await api.getBreed()
        //dispatch(setBreeds(responseBreed.data))
    } catch (e) {

    }
}

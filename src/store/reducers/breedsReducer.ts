import {BreedsAction, BreedsActionTypes, BreedsState} from "../../types/breeds";
import {Dispatch} from "react";
import {api} from "@/api/api";
import {setImages} from "@/store/actions-creators/breeds";
import { CatImage } from "@/types/CatImage";


const initialState: BreedsState = {
    currBreed: null,
    images: [[]]
}

export const breedsReducer = (state = initialState, action: BreedsAction): BreedsState => {
    switch (action.type) {
        case BreedsActionTypes.SORT_ALL:
			const arr: CatImage[] = [];
			state.images.map(page=>page.map(image=>arr.push(image)))

			const sortedArray = arr.sort((a, b)=>
				action.payload === 'DESC'?
				a.breeds[0].name > b.breeds[0].name?-1:1
				:a.breeds[0].name < b.breeds[0].name?-1:1
			)
			const sortedImages: [CatImage[]] = [[]]
			for(let i: number = 0; i<sortedArray.length; i+=5){
				sortedImages.push(sortedArray.slice(i, i+5))
			}
			sortedImages.shift()
            return {...state, images: sortedImages}
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
		const images: [CatImage[]] = [[]]
		for(let i: number = 0; i<10; i+=5){
			images.push(responseImages.data.slice(i, i+5))
		}
		images.shift()
		dispatch(setImages(images))
    } catch (e) {

    }
}

export const onSelectLimit = (limit: number) => async (dispatch: Dispatch<BreedsAction>) =>{
    try {
        const responseImages = await api.getBreedsImages(limit)
		const images: [CatImage[]] = [[]]
		for(let i: number = 0; i<limit; i+=5){
			images.push(responseImages.data.slice(i, i+5))
		}
		images.shift()
		dispatch(setImages(images))
    } catch (e) {

    }
}
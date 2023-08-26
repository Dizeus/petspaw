import {GalleryAction, GalleryActionTypes, GalleryState} from "../../types/gallery";
import {Dispatch} from "react";
import {api} from "@/api/api";
import {setImages} from "@/store/actions-creators/gallery";
import { CatImage } from "@/types/CatImage";


const initialState: GalleryState = {
    images: [[]],
	order: "RAND",
	type: "jpg,png",
	breed: '',
	limit: 10,
	page: 1
}

export const galleryReducer = (state = initialState, action: GalleryAction): GalleryState => {
    switch (action.type) {
		case GalleryActionTypes.SET_IMAGES:
            return {...state, images: action.payload}
		case GalleryActionTypes.SET_ORDER:
            return {...state, order: action.payload}
		case GalleryActionTypes.SET_TYPE:
            return {...state, type: action.payload}	
		case GalleryActionTypes.SET_BREED:
            return {...state, breed: action.payload}								
        case GalleryActionTypes.SET_LIMIT:
            return {...state, limit: action.payload}
		case GalleryActionTypes.SET_PAGE:
            return {...state, page: action.payload}	
        default:
            return state

    }
}


export const getImages = (limit: number, order: string, type: string, page: number, breed?: string) => async (dispatch: Dispatch<GalleryAction>) =>{
    try {
		const responseImages = await api.getImages(limit, order, type, page, breed)
		const images: [CatImage[]] = [[]]
		for(let i: number = 0; i<limit; i+=5){
			images.push(responseImages.data.slice(i, i+5))
		}
		images.shift()
		dispatch(setImages(images))
    } catch (e) {

    }
}
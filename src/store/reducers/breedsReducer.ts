import {BreedsAction, BreedsActionTypes, BreedsState} from "../../types/breeds";
import {Dispatch} from "react";
import {api} from "@/api/api";
import {setBreeds} from "@/store/actions-creators/breeds";


const initialState: BreedsState = {
    breeds: [],
    currBreed: null,
    limit: 10,
    sortType: '',
    images: []
}

export const breedsReducer = (state = initialState, action: BreedsAction): BreedsState => {
    switch (action.type) {
        case BreedsActionTypes.SET_BREEDS:
            return {...state, breeds: action.payload}
        case BreedsActionTypes.SORT_ALL:
            return {...state, images: []}
        case BreedsActionTypes.SET_LIMIT:
            return {...state, limit: action.payload}
        default:
            return state

    }
}

export const initializeBreeds = () => async (dispatch: Dispatch<BreedsAction>) =>{
    try {
        const responseBreeds = await api.getBreeds()
        dispatch(setBreeds(responseBreeds.data))
    } catch (e) {

    }
}

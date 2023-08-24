import {BreedsAction, BreedsActionTypes} from "../../types/breeds";
import {Breed, CatImage} from "@/types/CatImage";

export const setBreeds = (payload: Breed[]): BreedsAction => {
    return {type: BreedsActionTypes.SET_BREEDS, payload}
}

export const setLimit = (payload: number): BreedsAction => {
    return {type: BreedsActionTypes.SET_LIMIT, payload}
}

export const sort = (payload: string): BreedsAction => {
    return {type: BreedsActionTypes.SORT_ALL, payload}
}
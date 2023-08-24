import {Breed, CatImage} from "./CatImage"
import { HistoryItem } from "./HistoryItem";
export interface BreedsState {
    breeds: Breed[],
    currBreed: Breed | null,
    limit: number,
    sortType: string,
    images: [CatImage[]],
}

export enum BreedsActionTypes {
    SET_BREEDS = "SET_BREEDS",
    SORT_ALL = "SORT_ALL",
    SET_LIMIT = "SET_LIMIT",
	SET_BREED = "SET_BREED",
	SET_IMAGES = "SET_IMAGES"
}
interface setBreedsAction {
    type: BreedsActionTypes.SET_BREEDS,
    payload: Breed[];
}

interface sortAction{
    type: BreedsActionTypes.SORT_ALL,
    payload: string;
}

interface setLimitAction {
    type: BreedsActionTypes.SET_LIMIT,
    payload: number;
}

interface setBreedAction {
    type: BreedsActionTypes.SET_BREED,
    payload: Breed;
}
interface setImagesAction {
    type: BreedsActionTypes.SET_IMAGES,
    payload: [CatImage[]];
}
export type BreedsAction =
    setBreedsAction
    | sortAction
    | setLimitAction 
	| setBreedAction 
	| setImagesAction


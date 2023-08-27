import {Breed, CatImage} from "./CatImage"
import { HistoryItem } from "./HistoryItem";
export interface BreedsState {
    currBreed: Breed | null,
    images: CatImage[],
}

export enum BreedsActionTypes {
    SORT_ALL = "SORT_ALL",
	SET_BREED = "SET_BREED",
	SET_IMAGES = "SET_IMAGES"
}

interface sortAction{
    type: BreedsActionTypes.SORT_ALL,
    payload: string;
}

interface setBreedAction {
    type: BreedsActionTypes.SET_BREED,
    payload: Breed;
}
interface setImagesAction {
    type: BreedsActionTypes.SET_IMAGES,
    payload: CatImage[];
}
export type BreedsAction = sortAction
	| setBreedAction 
	| setImagesAction


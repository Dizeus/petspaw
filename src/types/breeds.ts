import {Breed, CatImage} from "./CatImage"

export interface BreedsState {
    currBreed: Breed | null,
    images: CatImage[],
	isBreedsFetching: boolean,
}

export enum BreedsActionTypes {
    SORT_ALL = "SORT_ALL",
	SET_BREED = "SET_BREED",
	SET_IMAGES = "SET_IMAGES",
	SET_IS_BREEDS_FETCHING = "SET_IS_BREEDS_FETCHING"
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

interface setIsBreedsFetchingAction {
    type: BreedsActionTypes.SET_IS_BREEDS_FETCHING,
    payload: boolean;
}
export type BreedsAction = sortAction
	| setBreedAction 
	| setImagesAction
	| setIsBreedsFetchingAction


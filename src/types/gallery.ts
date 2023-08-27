import { CatImage } from "./CatImage"
import { HistoryItem } from "./HistoryItem";

export interface GalleryState {
    images: CatImage[],
	order: string,
	type: string,
	breed: string,
	limit: number,
	page: number
}

export enum GalleryActionTypes {
	SET_IMAGES = "SET_IMAGES",
	SET_ORDER = "SET_ORDER",
	SET_TYPE = "SET_TYPE",
	SET_BREED = "SET_BREED",
	SET_LIMIT = "SET_LIMIT",
	SET_PAGE = "SET_PAGE"
}

interface setImagesAction {
    type: GalleryActionTypes.SET_IMAGES,
	payload: CatImage[];
}

interface setOrderAction {
    type: GalleryActionTypes.SET_ORDER,
	payload: string;
}
interface setTypeAction {
    type: GalleryActionTypes.SET_TYPE,
	payload: string;
}
interface setBreedAction {
    type: GalleryActionTypes.SET_BREED,
	payload: string;
}
interface setLimitAction {
    type: GalleryActionTypes.SET_LIMIT,
	payload: number;
}
interface setPageAction {
    type: GalleryActionTypes.SET_PAGE,
	payload: number;
}

export type GalleryAction =	setOrderAction
	| setImagesAction 
	| setTypeAction
	| setBreedAction
	| setLimitAction 
	| setPageAction

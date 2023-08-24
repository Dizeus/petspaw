import { CatImage } from "./CatImage"
import { HistoryItem } from "./HistoryItem";
export interface VoteState {
    image: null | CatImage,
	history: HistoryItem[]
	inFavourites: number | null
}

export enum VoteActionTypes {
	SET_HISTORY = "SET_HISTORY",
	SET_IMAGE = "SET_IMAGE",
	SET_IN_FAVOURITES = "SET_IN_FAVOURITES"
}

interface setHistoryAction {
    type: VoteActionTypes.SET_HISTORY,
	payload: HistoryItem[];
}

interface setImageAction {
    type: VoteActionTypes.SET_IMAGE,
	payload: CatImage;
}

interface setInFavouritesAction {
    type: VoteActionTypes.SET_IN_FAVOURITES,
	payload: number | null
}

export type VoteAction =
	| setHistoryAction 
	| setImageAction
	| setInFavouritesAction

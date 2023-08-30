import { CatImage } from "./CatImage"
import { HistoryItem } from "./HistoryItem";
export interface VoteState {
    image: null | CatImage,
	history: HistoryItem[]
	inFavourites: number | null,
	isHistoryFetching: boolean,
	isImageFetching: boolean,
}

export enum VoteActionTypes {
	SET_HISTORY = "SET_HISTORY",
	SET_IMAGE = "SET_IMAGE",
	SET_IN_FAVOURITES = "SET_IN_FAVOURITES",
	SET_IS_IMAGE_FETCHING = "SET_IS_IMAGE_FETCHING"
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

interface setIsImageFetching {
    type: VoteActionTypes.SET_IS_IMAGE_FETCHING,
	payload: boolean
}
export type VoteAction =
	| setHistoryAction 
	| setImageAction
	| setInFavouritesAction
	| setIsImageFetching

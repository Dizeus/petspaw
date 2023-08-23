import { CatImage } from "./CatImage"
import { HistoryItem } from "./HistoryItem";
export interface VoteState {
    image: null | CatImage,
	history: HistoryItem[]
	likes: string[]
    favourites: string[],
	dislikes: string[],
}

export enum VoteActionTypes {
	LIKE = "LIKE",
	FAV = "FAV",
    DISLIKE = "DISLIKE",
	SET_HISTORY = "SET_HISTORY",
	SET_IMAGE = "SET_IMAGE"
}
interface LikeAction {
    type: VoteActionTypes.LIKE,
	payload: string;
}

interface FavAction {
    type: VoteActionTypes.FAV,
	payload: string;
}

interface DislikeAction {
    type: VoteActionTypes.DISLIKE,
	payload: string;
}
interface setHistoryAction {
    type: VoteActionTypes.SET_HISTORY,
	payload: HistoryItem[];
}

interface setImageAction {
    type: VoteActionTypes.SET_IMAGE,
	payload: CatImage;
}
export type VoteAction = 
	DislikeAction 
	| LikeAction 
	| FavAction 
	| setHistoryAction 
	| setImageAction

import {VoteAction, VoteActionTypes} from "../../types/vote";
import { HistoryItem } from "@/types/HistoryItem";
import { CatImage } from "@/types/CatImage";

export const setHistory = (payload: HistoryItem[]): VoteAction => {
    return {type: VoteActionTypes.SET_HISTORY, payload}
}

export const setImage = (payload: CatImage): VoteAction => {
    return {type: VoteActionTypes.SET_IMAGE, payload}
}

export const setInFavourites = (payload: number | null): VoteAction => {
    return {type: VoteActionTypes.SET_IN_FAVOURITES, payload}
}
export const setIsImageFetching = (payload: boolean): VoteAction => {
    return {type: VoteActionTypes.SET_IS_IMAGE_FETCHING, payload}
}
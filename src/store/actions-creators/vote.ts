import {VoteAction, VoteActionTypes} from "../../types/vote";
import { HistoryItem } from "@/types/HistoryItem";
import { CatImage } from "@/types/CatImage";

export const like = (payload: string): VoteAction => {
    return {type: VoteActionTypes.DISLIKE, payload}
}

export const fav = (payload: string): VoteAction => {
    return {type: VoteActionTypes.DISLIKE, payload}
}

export const dislike = (payload: string): VoteAction => {
    return {type: VoteActionTypes.DISLIKE, payload}
}

export const setHistory = (payload: HistoryItem[]): VoteAction => {
    return {type: VoteActionTypes.SET_HISTORY, payload}
}

export const setImage = (payload: CatImage): VoteAction => {
    return {type: VoteActionTypes.SET_IMAGE, payload}
}
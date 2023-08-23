import {VoteAction, VoteActionTypes} from "../../types/vote";

export const like = (payload: string): VoteAction => {
    return {type: VoteActionTypes.DISLIKE, payload}
}

export const fav = (payload: string): VoteAction => {
    return {type: VoteActionTypes.DISLIKE, payload}
}

export const dislike = (payload: string): VoteAction => {
    return {type: VoteActionTypes.DISLIKE, payload}
}

import {VoteAction, VoteActionTypes, VoteState} from "../../types/vote";

const initialState: VoteState = {
	image: null,
	likes: [],
	favourites: [],
	dislikes: [],
}

export const voteReducer = (state = initialState, action: VoteAction): VoteState => {
    switch (action.type) {
        case VoteActionTypes.FAV:
            return {...state, favourites: [...state.favourites, action.payload]}
		case VoteActionTypes.DISLIKE:
            return {...state, dislikes: [...state.dislikes, action.payload]}
		case VoteActionTypes.LIKE:
            return {...state, likes: [...state.likes, action.payload]}
        default:
            return state

    }
}
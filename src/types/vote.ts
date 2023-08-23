export interface VoteState {
    image: null | {url: string, id: string},
	likes: string[]
    favourites: string[],
	dislikes: string[],
}

export enum VoteActionTypes {
	LIKE = "LIKE",
	FAV = "FAV",
    DISLIKE = "DISLIKE",
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

export type VoteAction = DislikeAction | LikeAction | FavAction

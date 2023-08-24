import {Breed, CatImage} from "./CatImage"
import { HistoryItem } from "./HistoryItem";
export interface BreedsState {
    breeds: Breed[],
    currBreed: Breed | null,
    limit: number,
    sortType: string,
    images: CatImage[],
}

export enum BreedsActionTypes {
    SET_BREEDS = "SET_BREEDS",
    SORT_ALL = "SORT_ALL",
    SET_LIMIT = "SET_LIMIT",
}
interface setBreedsAction {
    type: BreedsActionTypes.SET_BREEDS,
    payload: Breed[];
}

interface sortAction{
    type: BreedsActionTypes.SORT_ALL,
    payload: string;
}

interface setLimitAction {
    type: BreedsActionTypes.SET_LIMIT,
    payload: number;
}

export type BreedsAction =
    setBreedsAction
    | sortAction
    | setLimitAction


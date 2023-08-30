import {GalleryAction, GalleryActionTypes} from "../../types/gallery";
import {CatImage} from "@/types/CatImage";

export const setOrder = (payload: string): GalleryAction => {
    return {type: GalleryActionTypes.SET_ORDER, payload}
}

export const setType = (payload: string): GalleryAction => {
    return {type: GalleryActionTypes.SET_TYPE, payload}
}

export const setBreed = (payload: string): GalleryAction => {
    return {type: GalleryActionTypes.SET_BREED, payload}
}

export const setLimit = (payload: number): GalleryAction => {
    return {type: GalleryActionTypes.SET_LIMIT, payload}
}

export const setPage = (payload: number): GalleryAction => {
    return {type: GalleryActionTypes.SET_PAGE, payload}
}

export const setImages = (payload: CatImage[]): GalleryAction => {
    return {type: GalleryActionTypes.SET_IMAGES, payload}
}

export const setIsFetching = (payload: boolean): GalleryAction => {
    return {type: GalleryActionTypes.SET_IS_FETCHING, payload}
}
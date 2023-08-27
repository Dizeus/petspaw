import { Breed } from "./CatImage"

export type HistoryItem = {
	id: number,
	image_id: string,
	sub_id: string, 
	created_at?: string, 
	value: number, 
	country_code?: string,
	url?: string,
	breeds?: Breed[],
	image?: {
    	id: string,
    	url: string
	}
}
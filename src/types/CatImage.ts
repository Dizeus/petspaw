export type CatImage = {
	id: string,
	url: string,
    breeds: Breed[];
    categories?: [{id:string | number, name: string}];
    width: number,
	height: number,
	image?: {url: string}
}

export type Breed = {
	id: string,
	name: string,
	temperament: string,
    weight:{imperial: string, metric: string},
	origin: string,
	description: string,
	life_span: string
}
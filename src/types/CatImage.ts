export type CatImage = {
	id: string,
	url: string,
    breeds: Breed[];
    categories?: [{id:string | number, name: string}];
    width: number,
	height: number,
}

export type Breed = {
	id: string,
	name: string,
	temperament: string,
    weight:{imperial: string, metric: string},
	origin: string,
	life_span: string
}
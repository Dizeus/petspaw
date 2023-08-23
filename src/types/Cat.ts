export interface Cat {
	id: string,
	url: string,
    breeds: Breed;
    categories?: [{id:string | number, name: string}];
    width: number,
	height: number,
}

export interface Breed {
	id: string,
	temperament: string,
    weight:{imperial: string, metric: string},
	origin: string,
	life_span: string
}
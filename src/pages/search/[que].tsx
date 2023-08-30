import MainLayout from "@/layouts/MainLayout";
import ContentLayout from "@/layouts/ContentLayout";
import styles from "@/styles/Search.module.scss";
import { api } from "@/api/api";
import { CatImage } from "@/types/CatImage";
import { NextPageContext } from "next";
import { ImagesGrid } from "@/components/ImagesGrid";

BreedInfo.getInitialProps = async (ctx: NextPageContext) => {

	//Searching for breeds that have same letters as in que
	try{
		const resBreeds = await api.getBreeds();
		const letters: string[] = String(ctx.query.que).split("");
		const breeds = resBreeds.data.map((breed:any)=>({id:breed.id, name: breed.name}))
		const breedsIds = breeds.map((breed:any)=>{
			if(letters.every(letter=>breed.name.includes(letter)))
				return breed.id
		})
		const resImages = await api.getImages(20, "RAND", "gif,png,jpg", 1, breedsIds.join(','))
		return { result: resImages.data, que: ctx.query.que };
	}catch(e){
		console.error(e)
	}  	
};

export default function BreedInfo({ result, que }: { result: CatImage[], que: string }) {
  return (
    <MainLayout activeItem="none">
      <ContentLayout activeItem="search" searchque={que}>
		<div className={styles.search}>Search results for: <span>{que}</span></div>
        <ImagesGrid images={result} hover="name"/>
      </ContentLayout>
    </MainLayout>
  );
}

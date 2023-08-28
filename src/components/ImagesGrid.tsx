import React, { useState } from "react";
import styles from "@/styles/ImagesGrid.module.scss";
import { useRouter } from "next/router";
import { CatImage } from "@/types/CatImage";
import { useDispatch } from "react-redux";
import { addFav } from "@/store/reducers/voteReducer";
import { HistoryItem } from "@/types/HistoryItem";

interface ImagesGridProps {
  images: CatImage[] | HistoryItem[];
  hover: string;
  favIds?: string[];
  onFavClick?: (imageId: string, favId: number) => void;
}
export const ImagesGrid: React.FC<ImagesGridProps> = ({images, hover, onFavClick, favIds=[]}) => {
  const router = useRouter();
  const dispatch = useDispatch();
	const [fav, setFav] = useState<string[]>(favIds)

	const onClickFav = (imageId: string, favId: number)=>{
		if(onFavClick){
			onFavClick(imageId, favId)
		}else{
			console.log(fav);
			console.log(fav.includes(imageId));
			if(fav.includes(imageId)){
				setFav(fav.filter((item) => item != imageId))
			}else{
				console.log('else')
				setFav([...fav, imageId]);
				dispatch(addFav(imageId, null));
			}
			console.log(fav);
		}
		
	}
  return (
    <>
		{images.length>0?
			<div className={styles.grid}>
				{images.map((image) => (
						<div
						key={image.id}
						className={styles.grid__imageContainer}>
						<img
							className={styles.grid__image}
							src={image.url || image.image?.url}
							alt={`Cat ${image.breeds && image.breeds[0]?.name}`}
						/>
						{hover==="name"?
							<div className={styles.grid__modalName}>
								<button onClick={()=>router.push(`/breeds/${image.breeds && image.breeds[0]?.id}`)} className={styles.grid__modalButton}>
								{image.breeds && image.breeds[0]?.name}
								</button>
							</div>
							:
							hover ==='fav'?
							<div className={styles.grid__modalFav}>
								<button onClick={()=>{onClickFav(String(image.image_id || image.id), Number(image.id));}} className={`${styles.grid__modalButton} ${styles.grid__modalButton_fav}`}>
									{fav?.includes(String(image.image_id || image.id))?
										<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g id="fav-color-20">
											<path id="Vector" d="M5.38071 1C2.40903 1 0 3.40903 0 6.38071C0 7.80777 0.566893 9.17637 1.57597 10.1854L9.5286 18.1381C9.78895 18.3984 10.2111 18.3984 10.4714 18.1381L18.424 10.1854C19.4331 9.17637 20 7.80777 20 6.38071C20 3.40903 17.591 1 14.6193 1C13.1922 1 11.8236 1.56689 10.8146 2.57597L10 3.39052L9.18545 2.57597C8.17637 1.5669 6.80777 1 5.38071 1Z" fill="#FF868E"/>
											</g>
										</svg>
										:
										<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g id="fav-20">
											<path id="Vector 348 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M5.38071 2.33333C3.14541 2.33333 1.33333 4.14541 1.33333 6.38071C1.33333 7.45414 1.75975 8.48361 2.51878 9.24264L10 16.7239L17.4812 9.24264C18.2402 8.48361 18.6667 7.45414 18.6667 6.38071C18.6667 4.14541 16.8546 2.33333 14.6193 2.33333C13.5459 2.33333 12.5164 2.75975 11.7574 3.51878L10.4714 4.80474C10.2111 5.06509 9.78895 5.06509 9.5286 4.80474L8.24264 3.51878C7.48361 2.75975 6.45414 2.33333 5.38071 2.33333ZM0 6.38071C0 3.40903 2.40903 1 5.38071 1C6.80777 1 8.17637 1.5669 9.18545 2.57597L10 3.39052L10.8146 2.57597C11.8236 1.56689 13.1922 1 14.6193 1C17.591 1 20 3.40903 20 6.38071C20 7.80777 19.4331 9.17637 18.424 10.1854L10.4714 18.1381C10.2111 18.3984 9.78895 18.3984 9.5286 18.1381L1.57597 10.1854C0.566893 9.17637 0 7.80777 0 6.38071Z" fill="#FF868E"/>
											</g>
										</svg>
									}	
								</button>
							</div>
							:
							<div className={styles.grid__modalName}>
								{/*<button onClick={()=>{}} className={`${styles.grid__modalButton} ${styles.grid__modalButton_def}`}>
									<Image src={fav} alt="fav"/>
								</button>*/}
							</div>
							}
						</div>
					))}
			</div>
			:
			<div className={styles.noitem}>
				No item found
			</div>
			}
    </>
  );
};

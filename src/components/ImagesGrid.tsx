import React from "react";
import styles from "@/styles/ImagesGrid.module.scss";
import { useRouter } from "next/router";
import { CatImage } from "@/types/CatImage";
import Image from "next/image";
import fav from '@/assets/icons/fav-20.svg'
import favFull from '@/assets/icons/fav-color-20.svg'
import { useDispatch } from "react-redux";
import { addFav } from "@/store/reducers/voteReducer";
import { HistoryItem } from "@/types/HistoryItem";

interface ImagesGridProps {
  images: CatImage[] | HistoryItem[];
  hover: string;
  onFavClick?: (imageId: string, favId: number) => void;
}
export const ImagesGrid: React.FC<ImagesGridProps> = ({images, hover, onFavClick}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
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
						<button onClick={()=>{onFavClick && onFavClick(String(image.image_id), Number(image.id))}} className={`${styles.grid__modalButton} ${styles.grid__modalButton_fav}`}>
							<Image src={favFull} alt="fav"/>
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
    </>
  );
};

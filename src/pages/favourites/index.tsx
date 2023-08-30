import MainLayout from "@/layouts/MainLayout";
import styles from "@/styles/Favourites.module.scss";
import ContentLayout from "@/layouts/ContentLayout";
import { ImagesGrid } from "@/components/ImagesGrid";
import { NextPageContext } from "next";
import { api } from "@/api/api";
import { HistoryItem } from "@/types/HistoryItem";
import { addFav } from "@/store/reducers/voteReducer";
import { useState } from "react";
import { useDispatch } from "react-redux";


const Index = ({ fav }: { fav: HistoryItem[] }) => {
	const [images, setImages] = useState<HistoryItem[]>(fav);
	const [history, setHistory] =useState<{ image_id: string; created_at: string }[]>([]);
	const dispatch = useDispatch()

  const onFavClick = (imageId: string, favId: number) =>{
    setImages(images.filter((item) => favId != item.id));
	setHistory([...history, {image_id: imageId, created_at: String(Date())}])
	dispatch(addFav(imageId, favId))

  }
  return (
    <MainLayout activeItem="none">
      <ContentLayout activeItem="favourites">
          <ImagesGrid hover="fav" images={images} onFavClick={onFavClick} favIds={images.map(image=>(image.image_id))}/>
		<div className={styles.history}>
            {history?.map((x) => (
                  <div key={x.image_id} className={styles.history__element}>
                    <div className={styles.history__date}>
                      {x.created_at &&
                        String(new Date(x.created_at)).slice(15, 21)}
                    </div>
                    <div className={styles.history__message}>
                      Image ID: <span>{x.image_id}</span> was removed from Favourites
                    </div>
                  </div>
                ))
              }
          </div>
      </ContentLayout>
    </MainLayout>
  );
};

Index.getInitialProps = async (ctx: NextPageContext) => {
	try{
		const res = await api.getFavourites();
    	return { fav: res.data };
	}catch(e){
		console.error(e)
	}
};

export default Index;

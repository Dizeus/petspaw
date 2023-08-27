import MainLayout from "@/layouts/MainLayout";
import styles from "@/styles/Gallery.module.scss";
import ContentLayout from "@/layouts/ContentLayout";
import { NextThunkDispatch, wrapper } from "@/store";
import { useDispatch } from "react-redux";
import { setLimit, setBreed, setOrder, setType, setPage } from "@/store/actions-creators/gallery";
import Image from "next/image";
import load from "@/assets/icons/update-20.svg";
import { getImages} from "@/store/reducers/galleryReducer";
import { ImagesGrid } from "@/components/ImagesGrid";
import { useTypedSelector } from "@/hooks/useTypedSelector";

import { NextPageContext } from "next";
import { api } from "@/api/api";
import { HistoryItem } from "@/types/HistoryItem";


const Index = ({history}: {history: HistoryItem[]}) => {

	const dislikes: HistoryItem[] = history.filter(x=>x.value===-1)
	console.log(dislikes)
  return (
    <MainLayout activeItem="none">
      <ContentLayout activeItem="dislikes">
       
          <div className={styles.gallery__grid}>
            <ImagesGrid hover="def" images={dislikes} />
          </div>
      </ContentLayout>
    </MainLayout>
  );
};

Index.getInitialProps = async (ctx: NextPageContext) => {
  const res = await api.getHistory();
  return { history: res.data };
};

export default Index;

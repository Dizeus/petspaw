import MainLayout from "@/layouts/MainLayout";
import styles from "@/styles/Gallery.module.scss";
import ContentLayout from "@/layouts/ContentLayout";
import { ImagesGrid } from "@/components/ImagesGrid";
import { NextPageContext } from "next";
import { api } from "@/api/api";
import { HistoryItem } from "@/types/HistoryItem";

const Index = ({ history }: { history: HistoryItem[] }) => {
  const likes: HistoryItem[] = history.filter((x) => x.value === 1);
  return (
    <MainLayout activeItem="none">
      <ContentLayout activeItem="likes">
        <div className={styles.gallery__grid}>
          <ImagesGrid hover="def" images={likes} />
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

Index.getInitialProps = async (ctx: NextPageContext) => {
	try{
		const res = await api.getHistory(100);
   		return { history: res.data };
	}
	catch(e){
		console.error(e);
	}
};

export default Index;

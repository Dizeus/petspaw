import MainLayout from "@/layouts/MainLayout";
import ContentLayout from "@/layouts/ContentLayout";
import { NextThunkDispatch, wrapper } from "@/store";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { initializeBreeds } from "@/store/reducers/breedsReducer";
import styles from "@/styles/Breeds.module.scss";
import { onSelectLimit } from "@/store/reducers/breedsReducer";
import { useRouter } from "next/router";

const Index = () => {
  const { breeds, images } = useTypedSelector((state) => state.breeds);
  const dispatch = useDispatch();
  const router = useRouter();

  const onSelectBreedChange = (breed: string) => {
    router.push("/breeds/" + breed);
  };
  const onSelectLimitChange = (limit: number) => {
    dispatch(onSelectLimit(limit));
  };
  return (
    <MainLayout activeItem="breeds">
      <ContentLayout activeItem="breeds">
        <div className={styles.breeds}>
          
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await initializeBreeds());
  }
);
export default Index;

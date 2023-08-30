import MainLayout from "@/layouts/MainLayout";
import ContentLayout from "@/layouts/ContentLayout";
import { NextThunkDispatch, wrapper } from "@/store";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { initializeBreeds } from "@/store/reducers/breedsReducer";
import styles from "@/styles/Breeds.module.scss";
import { ImagesGrid } from "@/components/ImagesGrid";
import Loader from "@/components/Loader";

const Index = () => {
  const {images, isBreedsFetching } = useTypedSelector((state) => state.breeds);

  return (
    <MainLayout activeItem="breeds">
      <ContentLayout activeItem="breeds">
        <div className={styles.breeds}>
          <Loader isFetching={isBreedsFetching} width={200} height={400}>
            <ImagesGrid hover="name" images={images} />
          </Loader>
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

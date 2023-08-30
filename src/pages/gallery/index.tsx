import MainLayout from "@/layouts/MainLayout";
import styles from "@/styles/Gallery.module.scss";
import ContentLayout from "@/layouts/ContentLayout";
import { NextThunkDispatch, wrapper } from "@/store";
import { useDispatch } from "react-redux";
import { setLimit, setBreed, setOrder, setType, setPage } from "@/store/actions-creators/gallery";
import { getImages} from "@/store/reducers/galleryReducer";
import { ImagesGrid } from "@/components/ImagesGrid";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import Loader from "@/components/Loader";

const Index = () => {
	const {images, order, type, breed, limit, page, isFetching} = useTypedSelector((state)=>state.gallery)
  	const dispatch = useDispatch();
	
	const onChangeOrder = (newOrder: string) =>{
 		dispatch(setOrder(newOrder));
		dispatch(getImages(limit, newOrder, type, page, breed));		
	}
	const onChangeType = (newType: string) =>{
 		dispatch(setType(newType));
		dispatch(getImages(limit, order, newType, page, breed));
	}
	const onChangeBreed = (newBreed: string) =>{
 		dispatch(setBreed(newBreed));
		dispatch(getImages(limit, order, type, page, newBreed));		
	}
	const onChangeLimit = (newLimit: number) => {
		dispatch(setLimit(newLimit));
		dispatch(getImages(newLimit, order, type, page, breed))
  	}
	const onClickLoad = () => {
		dispatch(setPage(page+1));
		dispatch(getImages(limit, order, type, page + 1, breed));
  	}
  return (
    <MainLayout activeItem="gallery">
      <ContentLayout activeItem="gallery">
        <div className={styles.gallery}>
          <div className={styles.gallery__filters}>
            <div className={styles.gallery__filter}>
              <div className={styles.gallery__filterTitle}>Order</div>
              <select
                onChange={(e) => onChangeOrder(e.target.value)}
                className={styles.gallery__dropdown}
                name="order"
                defaultValue={"RAND"}
              >
                <option value={"RAND"}>Random</option>
                <option value={"DESC"}>Desc</option>
                <option value={"ASC"}>Asc</option>
              </select>
            </div>
            <div className={styles.gallery__filter}>
              <div className={styles.gallery__filterTitle}>TYPE</div>
              <select
                onChange={(e) => onChangeType(e.target.value)}
                className={styles.gallery__dropdown}
                name="type"
                id="type"
                defaultValue={"jpg,png"}
              >
                <option value={"jpg,png,gif"}>All</option>
                <option value={"jpg,png"}>Static</option>
                <option value={"gif"}>Animated</option>
              </select>
            </div>
            <div className={styles.gallery__filter}>
              <div className={styles.gallery__filterTitle}>Breed</div>
              <select
                onChange={(e) => onChangeBreed(e.target.value)}
                className={styles.gallery__dropdown}
                name="breeds"
                defaultValue={""}
              >
                <option value="">None</option>
                <option value="abys">Abyssinian</option>
                <option value="aege">Aegean</option>
                <option value="abob">American Bobtail</option>
                <option value="acur">American Curl</option>
                <option value="asho">American Shorthair</option>
                <option value="awir">American Wirehair</option>
                <option value="amau">Arabian Mau</option>
                <option value="amis">Australian Mist</option>
                <option value="bali">Balinese</option>
                <option value="bamb">Bambino</option>
                <option value="beng">Bengal</option>
                <option value="birm">Birman</option>
                <option value="bomb">Bombay</option>
                <option value="bslo">British Longhair</option>
                <option value="bsho">British Shorthair</option>
                <option value="bure">Burmese</option>
                <option value="buri">Burmilla</option>
                <option value="cspa">California Spangled</option>
                <option value="ctif">Chantilly-Tiffany</option>
                <option value="char">Chartreux</option>
                <option value="chau">Chausie</option>
                <option value="chee">Cheetoh</option>
                <option value="csho">Colorpoint Shorthair</option>
                <option value="crex">Cornish Rex</option>
                <option value="cymr">Cymric</option>
                <option value="cypr">Cyprus</option>
                <option value="drex">Devon Rex</option>
                <option value="dons">Donskoy</option>
                <option value="lihu">Dragon Li</option>
                <option value="emau">Egyptian Mau</option>
                <option value="ebur">European Burmese</option>
                <option value="esho">Exotic Shorthair</option>
                <option value="hbro">Havana Brown</option>
                <option value="hima">Himalayan</option>
                <option value="jbob">Japanese Bobtail</option>
                <option value="java">Javanese</option>
                <option value="khao">Khao Manee</option>
                <option value="kora">Korat</option>
                <option value="kuri">Kurilian</option>
                <option value="lape">LaPerm</option>
                <option value="mcoo">Maine Coon</option>
                <option value="mala">Malayan</option>
                <option value="manx">Manx</option>
                <option value="munc">Munchkin</option>
                <option value="nebe">Nebelung</option>
                <option value="norw">Norwegian Forest Cat</option>
                <option value="ocic">Ocicat</option>
                <option value="orie">Oriental</option>
                <option value="pers">Persian</option>
                <option value="pixi">Pixie-bob</option>
                <option value="raga">Ragamuffin</option>
                <option value="ragd">Ragdoll</option>
                <option value="rblu">Russian Blue</option>
                <option value="sava">Savannah</option>
                <option value="sfol">Scottish Fold</option>
                <option value="srex">Selkirk Rex</option>
                <option value="siam">Siamese</option>
                <option value="sibe">Siberian</option>
                <option value="sing">Singapura</option>
                <option value="snow">Snowshoe</option>
                <option value="soma">Somali</option>
                <option value="sphy">Sphynx</option>
                <option value="tonk">Tonkinese</option>
                <option value="toyg">Toyger</option>
                <option value="tang">Turkish Angora</option>
                <option value="tvan">Turkish Van</option>
                <option value="ycho">York Chocolate</option>
              </select>
            </div>
            <div
              className={`${styles.gallery__filter} ${styles.gallery__filter_load}`}
            >
              <div>
                <div className={styles.gallery__filterTitle}>Limit</div>
                <select
                  defaultValue={10}
                  onChange={(e) => onChangeLimit(Number(e.target.value))}
                  className={styles.gallery__dropdown}
                  name="limit"
                >
                  <option value={5}>5 items per page</option>
                  <option value={10}>10 items per page</option>
                  <option value={15}>15 items per page</option>
                  <option value={20}>20 items per page</option>
                </select>
              </div>
              <button onClick={onClickLoad} className={styles.gallery__load}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="update-20">
                    <path
                      id="Vector (Stroke)"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.48189 2.49989L7.93396 0.953004L8.88633 0L12.0577 3.16928L8.88634 6.33873L7.93395 5.38576L9.47232 3.84832C5.51244 3.99813 2.3473 7.25498 2.3473 11.2478C2.3473 15.3361 5.66547 18.6527 9.75744 18.6527C13.8494 18.6527 17.1676 15.3361 17.1676 11.2478V10.5742H18.5149V11.2478C18.5149 16.081 14.5927 20 9.75744 20C4.92221 20 1 16.081 1 11.2478C1 6.50682 4.77407 2.64542 9.48189 2.49989Z"
                      fill="#FF868E"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.gallery__grid}>
            <Loader isFetching={isFetching} width={200} height={400}>
              <ImagesGrid hover="fav" images={images} />
            </Loader>
          </div>
        </div>
      </ContentLayout>
    </MainLayout>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await getImages(10, "RAND", "jpg,png", 1));
  }
);

export default Index;

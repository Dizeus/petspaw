import MainLayout from "@/layouts/MainLayout";
import ContentLayout from '@/layouts/ContentLayout'
import {NextThunkDispatch, wrapper} from "@/store";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {initializeBreeds} from "@/store/reducers/breedsReducer";
import styles from "@/styles/Breeds.module.scss";
import Image from "next/image";
import { onSelectBreed, onSelectLimit } from "@/store/reducers/breedsReducer";
import sortIcon from "@/assets/icons/sort-20.svg";
import sortRev from "@/assets/icons/soft-revert-20.svg";
import { sort } from "@/store/actions-creators/breeds";
import { ArrrowTitle } from "@/components/ArrowTittle";

const Index = () => {
	const {breeds, images} = useTypedSelector(state => state.breeds)
	const dispatch = useDispatch();


	const onSelectBreedChange = (breed: string) => {
      dispatch(onSelectBreed(breed));
    };
    const onSelectLimitChange = (limit: number) => {
      dispatch(onSelectLimit(limit));
    };
	return (
    <MainLayout activeItem="breeds">
      <ContentLayout activeItem="breeds">
        <div className={styles.breeds}>
          <div className={styles.breeds__header}>
            <ArrrowTitle activeItem="breeds" />
            <select
              onChange={(e) => onSelectBreedChange(e.target.value)}
              className={styles.breeds__dropdown}
              name="breeds"
              id="breeds"
              defaultValue={""}
            >
              <option value="">All breeds</option>
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
            <select
              defaultValue={10}
              onChange={(e) => onSelectLimitChange(Number(e.target.value))}
              className={styles.breeds__limit}
              name="limit"
              id="limit"
            >
              <option value={5}>Limit: 5</option>
              <option value={10}>Limit: 10</option>
              <option value={15}>Limit: 15</option>
              <option value={20}>Limit: 20</option>
            </select>
            <div onClick={() => dispatch(sort("ASC"))} className={styles.breeds__sort}>
              <Image src={sortIcon} alt="Asc" />
            </div>
            <div onClick={() => dispatch(sort("DESC"))} className={styles.breeds__sort}>
              <Image src={sortRev} alt="Desc" />
            </div>
          </div>
          <div className={styles.breeds__grid}>
            {images.map((page, i) => {
              return (
                <div key={i} className={styles.breeds__images}>
                  {page.map((image) => (
                    <div
                      key={image.id}
                      className={
                        i % 2 !== 0
                          ? styles.breeds__imageContainer_reverse
                          : styles.breeds__imageContainer
                      }
                    >
                      <img
                        className={styles.breeds__image}
                        src={image.url}
                        alt={`Cat ${image.breeds[0].name}`}
                      />
                      <div className={styles.breeds__modal}>
                        <button className={styles.breeds__name}>
                          {image.breeds[0].name}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
	const dispatch = store.dispatch as NextThunkDispatch
	await dispatch(await initializeBreeds())
})
export default Index;
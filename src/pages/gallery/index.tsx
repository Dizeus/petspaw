import MainLayout from "@/layouts/MainLayout";
import styles from "@/styles/Gallery.module.scss"
import ContentLayout from '@/layouts/ContentLayout'
import { ArrrowTitle } from "@/components/ArrowTittle";
import { useDispatch } from "react-redux";
import { setLimit, setBreed } from "@/store/actions-creators/gallery";
import Image from "next/image";
import load from '@/assets/icons/update-20.svg'
const Index = () => {

	const dispatch = useDispatch()

    return (
      <MainLayout activeItem="gallery">
        <ContentLayout activeItem="gallery">
          <div className={styles.gallery}>
            <div className={styles.gallery__header}>
              <ArrrowTitle activeItem="gallery" />
              <button>Upload</button>
            </div>
            <div className={styles.gallery__filters}>
              <div className={styles.gallery__filter}>
                <div>Order</div>
                <select
                  onChange={(e) => dispatch(setBreed(e.target.value))}
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
                <div>Breed</div>
                <select
                  onChange={(e) => dispatch(setBreed(e.target.value))}
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
              <div className={styles.gallery__filter}>
                <div>TYPE</div>
                <select
                  className={styles.gallery__dropdown}
                  name="type"
                  id="type"
                  defaultValue={"jpg,png,gif"}
                >
                  <option value={"jpg,png,gif"}>All</option>
                  <option value={"jpg,png"}>Static</option>
                  <option value={"gif"}>Animated</option>
                </select>
              </div>
              <div className={styles.gallery__filter}>
                <div>Limit</div>
                <select
                  defaultValue={10}
                  onChange={(e) => dispatch(setLimit(Number(e.target.value)))}
                  className={styles.gallery__dropdown}
                  name="limit"
                >
                  <option value={5}>5 items per page</option>
                  <option value={10}>10 items per page</option>
                  <option value={15}>15 items per page</option>
                  <option value={20}>20 items per page</option>
                </select>
              </div>
              <button></button>
            </div>
            <div className={styles.gallery__grid}><Image alt="load new imgs" src={load}/></div>
          </div>
        </ContentLayout>
      </MainLayout>
    );
};

export default Index;
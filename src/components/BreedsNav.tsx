import styles from "@/styles/BreedsNav.module.scss";
import React from "react";
import { onSelectLimit } from "@/store/reducers/breedsReducer";
import { sort } from "@/store/actions-creators/breeds";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

export const BreedsNav = () => {

	const dispatch = useDispatch();
    const router = useRouter();

    const onSelectBreedChange = (breed: string) => {
      router.push("/breeds/" + breed);
    };
    const onSelectLimitChange = (limit: number) => {
      dispatch(onSelectLimit(limit));
    };

  return (
    <>
      <>
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
          	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="sort-20">
				<path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M4 0.195262C4.26035 -0.0650874 4.68246 -0.0650874 4.94281 0.195262L8.94281 4.19526L8 5.13807L5.13807 2.27614V20H3.80474V2.27614L0.942809 5.13807L0 4.19526L4 0.195262ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 9.93411e-09 15.1381 9.93411e-09C13.2971 9.93411e-09 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z" fill="#8C8C8C"/>
				</g>
			</svg>
        </div>
        <div onClick={() => dispatch(sort("DESC"))} className={styles.breeds__sort}>
          	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="soft-revert-20">
				<path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M3.80474 17.7239V0H5.13807V17.7239L8 14.8619L8.94281 15.8047L4.94281 19.8047C4.81778 19.9298 4.64822 20 4.4714 20C4.29459 20 4.12502 19.9298 4 19.8047L0 15.8047L0.942809 14.8619L3.80474 17.7239ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 0 15.1381 0C13.2971 0 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z" fill="#8C8C8C"/>
				</g>
			</svg>
        </div>
      </>
    </>
  );
}

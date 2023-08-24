import MainLayout from "@/layouts/MainLayout";
import ContentLayout from "@/layouts/ContentLayout";
import { NextThunkDispatch, wrapper } from "@/store";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { initializeBreeds } from "@/store/reducers/breedsReducer";
import styles from "@/styles/Breed.module.scss";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { onSelectLimit } from "@/store/reducers/breedsReducer";
import sortIcon from "@/assets/icons/sort-20.svg";
import sortRev from "@/assets/icons/soft-revert-20.svg";
import { sort } from "@/store/actions-creators/breeds";
import { ArrrowTitle } from "@/components/ArrowTittle";
import { useRouter } from "next/router";
import { api } from "@/api/api";
import { useState } from "react";
import { Breed, CatImage } from "@/types/CatImage";
import { NextPageContext } from "next";

BreedInfo.getInitialProps = async (ctx: NextPageContext) => {
	console.log(ctx.query.breed)
  const res = await api.getBreed(ctx.query.breed);
  return { breedInfo: res.data };
};



export default function BreedInfo({ breedInfo }: { breedInfo: CatImage[] }) {

  const [page, setPage] = useState(0)
	const breed = breedInfo[0].breeds[0]
  return (
    <MainLayout activeItem="breeds">
      <ContentLayout activeItem="breeds">
        <div className={styles.breed}>
          <div className={styles.breed__header}>
            <ArrrowTitle activeItem="breeds" />
            <div className={styles.breed__id}>{breed.id}</div>
          </div>
          <img
            className={styles.breed__img}
            src={breedInfo[page].url}
            alt="cat"
          />
          <div className={styles.breed__slider}>
            {breedInfo.map((el, i) => (
              <div
                key={i}
                className={
                  page === i
                    ? `${styles.breed__dot} ${styles.breed__dot_active}`
                    : styles.breed__dot
                }
                onClick={() => setPage(i)}
              ></div>
            ))}
          </div>
          <div className={styles.breed__info}>
            <div className={styles.breed__name}>{breed.name}</div>
            <div className={styles.breed__description}>
              {breed.description.split(",")[0]}
            </div>

            <div className={styles.breed__subinfo}>
              <div className={styles.breed__temper}>
                <strong>Temperament:</strong>
                {breed.temperament}
              </div>
              <div className={styles.breed__details}>
                <div className={styles.breed__detail}><strong>Origin: </strong>{breed.origin}</div>
				<div className={styles.breed__detail}><strong>Weight: </strong>{breed.weight.metric}</div>
				<div className={styles.breed__detail}><strong>Life span: </strong>{breed.life_span} years</div>
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};



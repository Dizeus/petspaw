import React from "react";
import styles from "@/styles/ImagesGrid.module.scss";
import { useRouter } from "next/router";
import { CatImage } from "@/types/CatImage";

interface ImagesGridProps {
  images: [CatImage[]]
}
export const ImagesGrid: React.FC<ImagesGridProps> = ({images}) => {
  const router = useRouter();
  return (
    <>
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
    </>
  );
};

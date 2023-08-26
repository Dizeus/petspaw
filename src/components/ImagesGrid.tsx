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
      <div className={styles.grid}>
        {images.map((page, i) => {
          return (
            <div key={i} className={styles.grid__images}>
              {page.map((image) => (
                <div
                  key={image.id}
                  className={
                    i % 2 !== 0
                      ? styles.grid__imageContainer_reverse
                      : styles.grid__imageContainer
                  }
                >
                  <img
                    className={styles.grid__image}
                    src={image.url}
                    alt={`Cat ${image.breeds[0]?.name}`}
                  />
                  <div className={styles.grid__modal}>
                    <button className={styles.grid__name}>
                      {image.breeds[0]?.name}
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

import styles from "@/styles/MainLayout.module.scss";
import React from "react";
import Image from "next/image";

type StaticImageData = {
    src: string
    height: number
    width: number
    blurDataURL?: string
};
interface NavItemProps {
    type: string,
    src: StaticImageData,
}
export const NavItem: React.FC<NavItemProps> = ({type, src}) =>{
  return (
      <div className={styles.navbar__item}>
          <div className={styles.navbar__imgContainer}>
              <Image className={styles.navbar__img} src={src} alt={`${type} image`} layout='fixed'/>
          </div>
          <button className={styles.navbar__button}>{type}</button>
      </div>
  )
}
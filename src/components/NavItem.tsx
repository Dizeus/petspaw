import styles from "@/styles/MainLayout.module.scss";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

type StaticImageData = {
    src: string
    height: number
    width: number
    blurDataURL?: string
};
interface NavItemProps {
    type: string,
    src: StaticImageData,
	active: boolean,
}
export const NavItem: React.FC<NavItemProps> = ({type, src, active}) =>{

	console.log(active)
	const router = useRouter()
  return (
      <div className={active?`${styles.navbar__item} ${styles.navbar__item_active}`:`${styles.navbar__item}`} onClick={() => router.push(`/${type}`)}>
          <div className={styles.navbar__imgContainer}>
              <Image className={styles.navbar__img } src={src} alt={`${type} image`} layout='fixed'/>
          </div>
          <button className={styles.navbar__button}>{type}</button>
      </div>
  )
}
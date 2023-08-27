import styles from '../styles/ContentLayout.module.scss'
import Image from 'next/image';
import likes from '@/assets/icons/like-30.svg'
import likesActive from "@/assets/icons/like-white-30.svg";
import dislikes from '@/assets/icons/dislike-30.svg'
import dislikesActive from '@/assets/icons/dislike-white-30.svg'
import fav from '@/assets/icons/fav-30.svg'
import favActive from "@/assets/icons/fav-white-30.svg";
import search from '@/assets/icons/search-20.svg'
import arrowBack from "@/assets/icons/back-20.svg";
import { BreedsNav } from '@/components/BreedsNav';
import { GalleryNav } from '@/components/GalleryNav';
import { useRouter } from 'next/router';

interface ContentLayoutProps {
	children: any,
	activeItem: string,
	breedId?: string
}
const ContentLayout: React.FC<ContentLayoutProps> = ({children, activeItem, breedId}) => {

	const router = useRouter()
     console.log(activeItem);
    return (
      <>
        <nav className={styles.search}>
          <form className={styles.search__form}>
            <input
              className={styles.search__input}
              type="text"
              placeholder="Search for breads by name"
            />
            <button className={styles.search__button} type="submit">
              <Image alt="search" src={search} />
            </button>
          </form>
          <button onClick={()=>router.push('/likes')} className={activeItem==='likes'?`${styles.search__link} ${styles.search__link_active}`:styles.search__link}>
            <Image alt="likes" src={activeItem==='likes'?likesActive:likes} />
          </button>
          <button onClick={()=>router.push('/favourites')} className={activeItem==='favourites'?`${styles.search__link} ${styles.search__link_active}`:styles.search__link}>
            <Image alt="favourites" src={activeItem==='favourites'?favActive:fav} />
          </button>
          <button onClick={()=>router.push('/dislikes')} className={activeItem==='dislikes'?`${styles.search__link} ${styles.search__link_active}`:styles.search__link}>
            <Image alt="dislikes" src={activeItem==='dislikes'?dislikesActive:dislikes} />
          </button>
        </nav>
        <div className={styles.content}>
          <div className={styles.content__header}>
            <button className={styles.arrow} onClick={()=>router.back()}>
              	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="back-20" clip-path="url(#clip0_1_1563)">
					<path id="Vector" d="M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z" fill="#FF868E"/>
					</g>
					<defs>
					<clipPath id="clip0_1_1563">
					<rect width="20" height="20" fill="white"/>
					</clipPath>
					</defs>
				</svg>
            </button>
			<div onClick={()=>router.push(`/${activeItem}`)} className={breedId?styles.subtitle:styles.title}>{activeItem}</div>
			{activeItem === "breeds" && (breedId!=undefined?<div className={styles.title}>{breedId}</div>:<BreedsNav/>)}
			{activeItem === "gallery" && <GalleryNav/>}
          </div>
          {children}
        </div>
      </>
    );
};
export default ContentLayout;
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
	activeItem: string
}
const ContentLayout: React.FC<ContentLayoutProps> = ({children, activeItem}) => {

	const router = useRouter()
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
              <Image alt="back" src={arrowBack} />
            </button>
            <div className={styles.title}>{activeItem}</div>
            {activeItem === "breeds" &&  <BreedsNav/>}
			{activeItem === "gallery" && <GalleryNav/>}
          </div>
          {children}
        </div>
      </>
    );
};
export default ContentLayout;
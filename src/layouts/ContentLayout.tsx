import styles from '../styles/ContentLayout.module.scss'
import Image from 'next/image';
import likes from '@/assets/icons/like-30.svg'
import dislikes from '@/assets/icons/dislike-30.svg'
import fav from '@/assets/icons/fav-30.svg'
import search from '@/assets/icons/search-20.svg'
import arrowBack from '@/assets/icons/back-20.svg'
interface ContentLayoutProps {
	children: any,
	activeItem: string
}
const ContentLayout: React.FC<ContentLayoutProps> = ({children, activeItem}) => {
    return (
		<>
			<nav className={styles.search}>
				<form className={styles.search__form}>
					<input className={styles.search__input} type="text" placeholder="Search for breads by name" />
					<button className={styles.search__button} type='submit'><Image alt='search' src={search}/></button>
				</form>
				<div className={styles.search__link}><Image alt='likes' src={likes} layout='fixed'/></div>
				<div className={styles.search__link}><Image alt='favourites' src={fav} layout='fixed'/></div>
				<div className={styles.search__link}><Image alt='dislikes' src={dislikes} layout='fixed'/></div>
			</nav>
			<div className={styles.content}>
				<div className={styles.content__header}>
					<div className={styles.content__arrow}><Image alt='back' src={arrowBack}/></div>
					<div className={styles.content__title}>{activeItem}</div>
					<>
						<select name="breeds" id="breeds">
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="mercedes">Mercedes</option>
							<option value="audi">Audi</option>
						</select>
					</>
				</div>
				{children}
			</div>
		</>
    );
};

export default ContentLayout;
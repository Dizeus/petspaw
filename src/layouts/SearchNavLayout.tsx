import styles from '../styles/MainLayout.module.scss'

interface SearchNavLayoutProps {
	children: any
}
const MainLayout: React.FC<SearchNavLayoutProps> = ({children}) => {
    return (
		<>
			<div className={styles.search}>
				<form className={styles.search__form}>
					<input type="text" placeholder="Search for breads by name" />
					<button type='submit'></button>
				</form>
				<nav className={styles.search__nav}>

				</nav>
			</div>
		</>
    );
};

export default MainLayout;
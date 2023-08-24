import MainLayout from "@/layouts/MainLayout";
import ContentLayout from '@/layouts/ContentLayout'
import {NextThunkDispatch, wrapper} from "@/store";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {initializeBreeds} from "@/store/reducers/breedsReducer";
import styles from "@/styles/Breeds.module.scss";

const Index = () => {
	const {breeds, images} = useTypedSelector(state => state.breeds)
	const dispatch = useDispatch();

	return (
		<MainLayout activeItem='breeds'>
			<ContentLayout activeItem="breeds">
				<>
					<div className={styles.breeds}>
							{images.map((page, i)=>{
								return <div key={i} className={styles.breeds__images}>{
									page.map(image=>
									<div key={image.id} className={i%2!==0?styles.breeds__imageContainer_reverse:styles.breeds__imageContainer}>
										<img className={styles.breeds__image}  src={image.url} alt={`Cat ${image.breeds[0].name}`}/>
										<div className={styles.breeds__modal}>
											<button className={styles.breeds__name}>{image.breeds[0].name}</button>
										</div>
									</div>)
							}</div>
							})}
						
					</div>
				</>
			</ContentLayout>
		</MainLayout>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
	const dispatch = store.dispatch as NextThunkDispatch
	await dispatch(await initializeBreeds())
})
export default Index;
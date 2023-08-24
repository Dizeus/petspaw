import MainLayout from "@/layouts/MainLayout";
import ContentLayout from '@/layouts/ContentLayout'
import {NextThunkDispatch, wrapper} from "@/store";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {initializeBreeds} from "@/store/reducers/breedsReducer";
const Index = () => {
	const {breeds} = useTypedSelector(state => state.breeds)
	const dispatch = useDispatch();


	return (
		<MainLayout activeItem='voting'>
			<ContentLayout activeItem="voting">
				<>
					<select name="breeds" id="breeds">
						{breeds.map(breed=><option key={breed.id} value={breed.name}>{breed.name}</option>)}

						<option value="saab">Saab</option>
						<option value="mercedes">Mercedes</option>
						<option value="audi">Audi</option>
					</select>
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
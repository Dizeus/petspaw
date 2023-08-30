import MainLayout from "@/layouts/MainLayout";
import { Home } from "@/components/Home";
import withLoading from "@/HOC/WithLoading";

const Index = () => {
    return (
        <MainLayout>
			<Home/>
		</MainLayout>
    )
}

export default withLoading(Index)


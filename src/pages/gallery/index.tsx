import MainLayout from "@/layouts/MainLayout";
import styles from "@/styles/Voting.module.scss"
import SearchNavLayout from '@/layouts/ContentLayout'

const Index = () => {
    return (
        <MainLayout activeItem='gallery'>
			<SearchNavLayout>
			</SearchNavLayout>
		</MainLayout>
    );
};

export default Index;
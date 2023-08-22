import MainLayout from "@/layouts/MainLayout";
import styles from "@/styles/Voting.module.scss"
import ContentLayout from '@/layouts/ContentLayout'

const Index = () => {
    return (
        <MainLayout activeItem='voting'>
			<ContentLayout activeItem="voting">
			</ContentLayout>
		</MainLayout>
    );
};

export default Index;
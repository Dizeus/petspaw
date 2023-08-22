import MainLayout from "@/layouts/MainLayout";
import styles from "@/styles/Voting.module.scss"
import ContentLayout from '@/layouts/ContentLayout'

const Index = () => {
    return (
        <MainLayout activeItem='breeds'>
			<ContentLayout activeItem='breeds'>
			</ContentLayout>
		</MainLayout>
    );
};

export default Index;
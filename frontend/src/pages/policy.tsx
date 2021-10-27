import MainLayout from '../layouts';
import PolicyContent from '../component/policy';
import styles from '../styles/Home.module.scss';

function Policy() {
    return (
        <MainLayout>
            <div className={styles.contents}>
                <PolicyContent />
            </div>
        </MainLayout>
    );
}

export default Policy;

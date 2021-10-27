import MainLayout from '../layouts';
import TermsContent from '../component/terms';
import styles from '../styles/Home.module.scss';

function Terms() {
    return (
        <MainLayout>
            <div className={styles.contents}>
                <TermsContent />
            </div>
        </MainLayout>
    );
}

export default Terms;

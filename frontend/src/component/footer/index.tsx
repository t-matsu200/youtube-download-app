import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.scss';

function Footer() {
    const year = new Date().getFullYear();
    const router = useRouter();
    let containerStyle = styles.container;
    if (router.pathname === '/') {
        containerStyle = styles.container_abs;
    }
    return (
        <section className={containerStyle}>
            <div className={styles.footer}>
                <div className={styles.footer_logo}>
                    <span>www.fine-look.net</span>
                    <span>© 2021-{ year } Increments Inc.</span>
                </div>
                <div className={styles.footer_content}>
                    <Link href="/terms">
                    <a>
                        <span>terms</span>
                    </a>
                    </Link>
                    <Link href="/policy">
                    <a>
                        <span>privacy</span>
                    </a>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Footer;

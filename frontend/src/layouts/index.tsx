import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import styles from './index.module.scss';
import Seo from '../component/seo';

type LayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Seo />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;

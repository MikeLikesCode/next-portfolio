import Header from "../Header/header";
import Footer from "../Footer/footer";

import styles from './layout.module.css'

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
          {children}
      </main>
      <Footer />
    </div>
  );
}

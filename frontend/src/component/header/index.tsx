import styles from "./index.module.scss";
import Link from "next/link";

function Header() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 style={{ letterSpacing: "1px", color: "#ffffff" }}>
          <Link href="/">
            <a>
              <span style={{ fontWeight: "bold", fontFamily: "fantasy" }}>Free YouTube Downloader</span>
            </a>
          </Link>
        </h1>
      </div>
    </section>
  );
}

export default Header;
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; 2024 Spotify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

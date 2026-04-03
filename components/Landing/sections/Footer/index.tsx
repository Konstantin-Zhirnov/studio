import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <div>
            <div className={styles.brand}>Web Studio</div>

            <div className={styles.small}>
              Websites & web apps for small businesses in Nanaimo and Vancouver Island.
            </div>
          </div>

          <div className={styles.links}>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#pricing">Pricing</a>
          </div>
        </div>

        <div className={styles.copy}>
          © {new Date().getFullYear()} Web Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

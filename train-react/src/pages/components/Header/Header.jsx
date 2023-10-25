import styles from "../styles/Styles.module.css"

function Header(){
    return <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <h1 className={styles.headerTitle}>
                        <strong>Hi, my name is <em>Timur</em></strong><br /> a frontend developer
                    </h1>
                    <div className={styles.headerText}>
                        <p>with passion for learning and creating.</p>
                    </div>
                    <a className={styles.headerA} href="#">See git</a>
                </div>
            </div>
}
export default Header
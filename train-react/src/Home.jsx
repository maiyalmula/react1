import styles from "./Styles.module.css"
import classNames from 'classnames';



function Home(){
    return <>
    <div className={styles.nav}>
        <div className={styles.conteiner}>
            <div className={styles.navRow}>
                <div className={styles.logo}>
                    <a href=""><strong>Freelancer</strong> portfolio</a>
                </div>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}><a className={classNames(styles.navListLink, styles.navListLinkActive)} href="">Projects</a></li>
                    <li className={styles.navListItem}><a className={styles.navListLink} href="">Skils</a></li>
                    <li className={styles.navListItem}><a className={styles.navListLink} href="">Contacts</a></li>
                </ul>
            </div>
        </div>
    </div>
    

    <div className={styles.header}>
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
    </>
}
export default Home
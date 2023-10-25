import classNames from 'classnames';
import styles from "../styles/Styles.module.css"

import {NavLink} from 'react-router-dom'

function Navbar(){
    const activeLink = 'classNames(styles.navListLink, styles.navListLinkActive)'
    const normalLink = 'styles.navListLink'


    return <div className={styles.nav}>
                <div className={styles.conteiner}>
                    <div className={styles.navRow}>
                        <NavLink to="/" className={styles.logo}>

                            <a href=""><strong>Freelancer</strong> portfolio</a>

                        </NavLink>

                        
                        <ul className={styles.navList}>
                            <li className={styles.navListItem}>
                            <NavLink to="/" className={({isActive})=> isActive ? classNames(styles.navListLink, styles.navListLinkActive) : styles.navListLink}>
                                
                                Projects
                            </NavLink>
                               
                            </li>

                            <li className={styles.navListItem}>

                            <NavLink to="/skills" className={({isActive})=> isActive ? classNames(styles.navListLink, styles.navListLinkActive) : styles.navListLink}>
                                Skills
                            </NavLink>
                            </li>

                            <li className={styles.navListItem}>

                            <NavLink to="/contacts" className={({isActive})=> isActive ? classNames(styles.navListLink, styles.navListLinkActive) : styles.navListLink}>
                                Contacts
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
}
export default Navbar
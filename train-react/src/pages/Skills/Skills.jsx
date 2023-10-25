import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer'

import styles from "../components/styles/Styles.module.css"

function Skills(){
    return <>


    <main className={styles.skills}>
        <h1>Skills</h1>
        <div className={styles.skillsBlock}>
            <h2>Frontend</h2>
            <p>JavaScript, TypeScript, ReactJS, Angular, Redux,
                 HTML, CSS, NPM,<br /> BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
        </div>
        <div className={styles.skillsBlock}>
            <h2>Backend</h2>
            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
        </div>
    </main>


    </>
}

export default Skills
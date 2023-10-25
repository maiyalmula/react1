import styles from "../styles/Styles.module.css"
import Projects from '../Projects/Projects'
import {projects} from '../data/projects.data.js';

function Main(){
    return <main className={styles.section}>
                <div className={styles.conteiner}>
                    <p className={styles.projectsUpText}>Projects</p>
                    {projects.map(
                        project => (
                        <Projects key={project.id} project={project} />
                    ))}
                </div>
            </main>
}
export default Main
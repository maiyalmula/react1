import styles from "../styles/Styles.module.css"


function Projects({project}) {
    return <div key={project.id} className={styles.projects}>
                <div className={styles.project}>
                    <div className={styles.projectImg}>
                        <img src={project.image} alt="" />
                    </div>
                    <div className={styles.projectText}>
                        <p>{project.text}</p>
                    </div>
                </div>
           </div>
}
export default Projects
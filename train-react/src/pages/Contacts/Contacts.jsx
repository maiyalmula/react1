import styles from "../components/styles/Styles.module.css"

function Contacts(){
    return <main className={styles.skills}>
                <h1>Contacts</h1>
                <div className={styles.skillsBlock}>
                    <h2>Location</h2>
                    <p>Kiev,Ukraine</p>
                </div>
                <div className={styles.skillsBlock}>
                    <h2>Telegram / WhatsApp</h2>
                    <p>+7 905 123-45-67</p>
                </div>
                <div className={styles.skillsBlock}>
                    <h2>Email</h2>
                    <p>webdev@protonmail.com</p>
                </div>
            </main>
}
export default Contacts
import styles from "../styles/Styles.module.css"

function Footer(){
    return <div className={styles.footer}>
                <div className={styles.footerImg}>
                    <a href=""><img src="./footerIcons/vk.png" alt="" /></a>
                    <a href=""><img src="./footerIcons/instagram.png" alt="" /></a>
                    <a href=""><img src="./footerIcons/twitter.png" alt="" /></a>
                    <a href=""><img src="./footerIcons/gitHub.png" alt="" /></a>
                    <a href=""><img src="./footerIcons/linkedIn.png" alt="" /></a>
                </div>
                <p className={styles.footerP}>© 2022 frontend-dev.com</p>
            </div>
}
export default Footer
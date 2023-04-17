import Link from "next/link"
import styles from "./Topbar.module.scss"

const Topbar = () => {
  return (
    <div className={styles.topbar}>
        <ul className={styles.topbarItems}>
            <Link href="/about"><li className={styles.topbarItem}>About</li> </Link>
            <Link href="/contact"><li className={styles.topbarItem}>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Topbar
import Link from "next/link"
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri"
import styles from "./Social.module.scss"

const Social = () => {
  return (
    <div className={styles.social}>
        <Link  href="#">
            <RiFacebookFill className={styles.icon} />
        </Link>

        <Link  href="#">
            <RiInstagramFill className={styles.icon} />
        </Link>

        <Link  href="#">
            <RiYoutubeFill className={styles.icon} />
        </Link>
    </div>
  )
}

export default Social
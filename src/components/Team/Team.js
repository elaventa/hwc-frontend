import Image from "next/image"
import styles from "./Team.module.scss"
import img from "../../assets/hero.png"

const Team = () => {
  return (
    <section className={styles.teamContainer}>
        <h1 className={styles.title}>MEET OUR TEAM</h1>

        <div className={styles.members}>
            <div className={styles.member}>
                <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={img} alt=""/>
                </div>

                <div className={styles.contentWrapper}>
                    <h1 className={styles.name}>Name</h1>
                    <div className={styles.social}>

                    </div>

                </div>
            </div>

            <div className={styles.member}>
                <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={img} alt=""/>
                </div>

                <div className={styles.contentWrapper}>
                    <h1 className={styles.name}>Name</h1>
                    <div className={styles.social}>
                        
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Team
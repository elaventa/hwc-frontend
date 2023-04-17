import Image from "next/image";
import styles from "./Sponsor.module.scss";
import sponsorImg from "../../assets/sponsor.png";

const Sponsor = () => {
    return (
        <section className={styles.sponsorContainer}>

                <h1 className={styles.title}>OUR SPONSORS</h1>
                <div className={styles.sponsors}>
                    <div className={styles.sponsor}>
                        <p className={styles.sponsorName}>hardwork fitness</p> 
                    </div>
                    <div className={styles.sponsor}>
                        <p className={styles.sponsorName}>azwa fitness</p> 
                    </div>
                    <div className={styles.sponsor}>
                        <p className={styles.sponsorName}>hard work baby</p> 
                    </div>
                </div>

            {/* <div className={styles.right}>
                <Image
                    placeholder="blur"
                    loading="lazy"
                    className={styles.image}
                    src={sponsorImg}
                    alt="sponsor logo"
                />
            </div> */}
        </section>
    );
};

export default Sponsor;

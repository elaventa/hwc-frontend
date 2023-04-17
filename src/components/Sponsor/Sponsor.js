import Image from "next/image";
import styles from "./Sponsor.module.scss";
import img from "../../assets/placeholder.png";

const Sponsor = () => {
    return (
        <section className={styles.sponsorContainer}>
            <h1 className={styles.title}>OUR SPONSORS</h1>
            <div className={styles.sponsors}>
                <div className={styles.sponsor}>
                    <Image
                        placeholder="blur"
                        loading="lazy"
                        className={styles.image}
                        src={img}
                        alt=""
                    />
                    <p className={styles.sponsorName}>
                        Hard work classic sponsor powered by platinum
                    </p>
                </div>
                <div className={styles.sponsor}>
                    <Image
                        placeholder="blur"
                        loading="lazy"
                        className={styles.image}
                        src={img}
                        alt=""
                    />
                    <p className={styles.sponsorName}>
                        Hard work classic sponsor powered by gold
                    </p>
                </div>
                <div className={styles.sponsor}>
                    <Image
                        placeholder="blur"
                        loading="lazy"
                        className={styles.image}
                        src={img}
                        alt=""
                    />
                    <p className={styles.sponsorName}>
                        Hard work classic sponsor powered by silver
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Sponsor;

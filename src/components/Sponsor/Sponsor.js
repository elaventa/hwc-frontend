import Image from "next/image";
import styles from "./Sponsor.module.scss";
import sponsorImg from "../../assets/sponsor.png";

const Sponsor = () => {
    return (
        <section className={styles.sponsorContainer}>
            <div className={styles.left}>
                <h1 className={styles.title}>OUR SPONSOR</h1>
                <p className={styles.content}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, distinctio voluptate voluptatem exercitationem,
                    temporibus amet adipisci libero aliquid quasi qui incidunt
                    asperiores cumque omnis quae facilis natus eius ad id.
                </p>
            </div>

            <div className={styles.right}>
                <Image
                    placeholder="blur"
                    loading="lazy"
                    className={styles.image}
                    src={sponsorImg}
                    alt="sponsor logo"
                />
            </div>
        </section>
    );
};

export default Sponsor;

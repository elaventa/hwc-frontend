import Image from "next/image";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";
import img from "../../assets/arnauld.png";

const Hero = () => {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.title}>HARD WORK CLASSIC COMPETITIONS</h1>
                <p className={styles.content}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, distinctio voluptate voluptatem exercitationem,
                    temporibus amet adipisci libero aliquid quasi qui incidunt
                    asperiores cumque omnis quae facilis natus eius ad id.
                </p>
                <Button content="Learn more"></Button>
            </div>
            <Image
                placeholder="blur"
                loading="lazy"
                className={styles.image}
                src={img}
                priority
                alt=""
            />
        </section>
    );
};

export default Hero;

import Image from "next/image";
import styles from "./Shows.module.scss";
import img from "../../assets/placeholder.png";
import Button from "../Button/Button";
import Link from "next/link";
const Shows = () => {
    return (
        <div className={styles.showsContainer}>
            <section className={styles.shows}>
               
                    <div className={styles.show}>
                        <Image
                            placeholder="blur"
                            loading="lazy"
                            className={styles.image}
                            src={img}
                            alt=""
                        />
                        <div className={styles.contentWrapper}>
                            <h1 className={styles.title}>
                                Hard work classic sponsor powered by platinum
                            </h1>
                            <p className={styles.content}>
                             
                            </p>
                            <Link href="/registration">
                                <Button content="Register Now" />
                            </Link>
                        </div>
                    </div>


                    <div className={styles.show}>
                        <Image
                            placeholder="blur"
                            loading="lazy"
                            className={styles.image}
                            src={img}
                            alt=""
                        />
                        <div className={styles.contentWrapper}>
                            <h1 className={styles.title}>
                                Hard work classic sponsor powered by gold
                            </h1>
                            <p className={styles.content}>
                             
                            </p>
                            <Link href="/registration">
                                <Button content="Register Now" />
                            </Link>
                        </div>
                    </div>


                    <div className={styles.show}>
                        <Image
                            placeholder="blur"
                            loading="lazy"
                            className={styles.image}
                            src={img}
                            alt=""
                        />
                        <div className={styles.contentWrapper}>
                            <h1 className={styles.title}>
                                Hard work classic sponsor powered by silver
                            </h1>
                            <p className={styles.content}>
                             
                            </p>
                            <Link href="/registration">
                                <Button content="Register Now" />
                            </Link>
                        </div>
                    </div>

            </section>
        </div>
    );
};

export default Shows;

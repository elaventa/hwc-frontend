import Image from "next/image";
import styles from "./Shows.module.scss";
import img from "../../assets/hero.png";
import Button from "../Button/Button";
const Shows = () => {
    return (
        <div className={styles.showsContainer}>
            <section className={styles.shows}>
                {[1, 2, 3].map((i) => (
                    <div key={i} className={styles.show}>
                        <Image
                            placeholder="blur"
                            loading="lazy"
                            className={styles.image}
                            src={img}
                            alt=""
                        />
                        <div className={styles.contentWrapper}>
                            <h1 className={styles.title}>
                                Hard work classic pro qualifiers
                            </h1>
                            <p className={styles.content}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet laboriosam cum sapiente
                                sit unde quisquam molestias esse ab reiciendis.
                                Dolore doloremque inventore reiciendis debitis
                                possimus eum id, neque iste natus.
                            </p>
                            <Button content="Register Now" />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Shows;

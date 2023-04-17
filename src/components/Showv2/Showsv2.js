import Image from "next/image";
import styles from "./Shows.module.scss";
import img from "../../assets/hero.png";
import { RiCalendar2Fill } from "react-icons/ri";
import Button from "../Button/Button";
import Link from "next/link";

const Showsv2 = () => {
    return (
        <section className={styles.showsContainer}>
            <h1 className={styles.title}>COMPETITIONS</h1>

            <div className={styles.shows}>
                <div className={styles.show}>
                    <Image
                        placeholder="blur"
                        loading="lazy"
                        className={styles.image}
                        src={img}
                        alt=""
                    />

                    <div className={styles.content}>
                        <h2 className={styles.showTitle}>MR. Bangalore</h2>

                        <p className={styles.date}>
                            <RiCalendar2Fill /> <span>28,29,30 July 2023</span>{" "}
                        </p>

                        <Link href="/registration">
                            <Button content="Register Now" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showsv2;

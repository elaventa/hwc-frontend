import Image from "next/image";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";
import img from "../../assets/arnold.png";
import curve from "../../assets/wave.svg";
import phoneCurve from "../../assets/curve.svg";
import Link from "next/link";

const Hero = () => {
    return (
        <div className={styles.outer}>
         
            <section className={styles.heroContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentWrapper}>
                        <h1 className={styles.title}>
                            HARD WORK CLASSIC COMPETITIONS
                        </h1>
                        <p className={styles.content}>
                            Hardwork Classic events are designed to provide a
                            platform for athletes to display their strength,
                            symmetry, and overall physical appearance.
                        </p>
                        <div className={styles.actionBtns}>
                            <Link href={"/registration"}>
                                <Button content="Register Now"></Button>
                            </Link>

                            <Link href={"/"}>
                                <Button
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "1px solid #fff",
                                    }}
                                    content="Book Tickets"
                                ></Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Image
                    placeholder="blur"
                    className={styles.image}
                    src={img}
                    priority
                    alt=""
                />
            </section>
        </div>
    );
};

export default Hero;

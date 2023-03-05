import Image from "next/image";
import Button from "../Button/Button";
import styles from "./JoinUs.module.scss";
import background from "../../assets/background1.png";
const JoinUs = () => {
    return (
        <div className={styles.joinUsWrapper}>
            <div className={styles.background}>
                <Image className={styles.image} src={background} alt="syed shehbaz" />
            </div>
            <section className={styles.joinUsContainer}>
                <div className={styles.left}>
                    <h1 className={styles.title}>JOIN US TO PARTICIPATE</h1>
                    <Button content="Book now"></Button>
                </div>

                <div className={styles.right}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/IpvMgvwVo8U"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default JoinUs;

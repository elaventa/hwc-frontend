import Image from "next/image";
import Button from "../Button/Button";
import styles from "./JoinUs.module.scss";
import background from "../../assets/background1.png";
import { useGetDetails } from "@/reactQuery/details";
const JoinUs = () => {
    const { data } = useGetDetails()
    return (
        <div className={styles.joinUs}>

       
        <div className={styles.joinUsWrapper}>
            <div className={styles.background}>
                <Image
                    placeholder="blur"
                    loading="lazy"
                    className={styles.image}
                    src={background}
                    alt="syed shehbaz"
                />
            </div>
            <section className={styles.joinUsContainer}>
                <div className={styles.left}>
                    <h1 className={styles.title}>JOIN US TO PARTICIPATE</h1>
                    <Button content="Book now"></Button>
                </div>

                <div className={styles.right}>
                    <iframe
                        className={styles.frame}
                        src={data?.data?.youtubeLink}
                    ></iframe>
                </div>
            </section>
        </div>
        </div>
    );
};

export default JoinUs;

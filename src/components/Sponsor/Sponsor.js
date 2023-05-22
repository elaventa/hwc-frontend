import styles from "./Sponsor.module.scss";
import img from "../../assets/placeholder.png";
import { useGetSponsors } from "@/reactQuery/sponsor";
import { Image } from "antd";

const Sponsor = () => {
    const { data: sponsors, isLoading } = useGetSponsors();
    return (
        <section className={styles.sponsorContainer}>
            <h1 className={styles.title}>OUR SPONSORS</h1>

            <div className={styles.sponsors}>
                {sponsors?.data?.map((sponsor) => (
                    <div key={sponsor._id} className={styles.sponsor}>
                        <Image
                            preview={false}
                            placeholder="loading"
                            loading="lazy"
                            className={styles.image}
                            src={sponsor?.imageUrl}
                            alt=""
                        />
                        <p className={styles.sponsorName}>{sponsor?.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Sponsor;

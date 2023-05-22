import styles from "./Shows.module.scss";
import { RiCalendar2Fill } from "react-icons/ri";
import Button from "../Button/Button";
import Link from "next/link";
import { useGetCompetitions } from "@/reactQuery/competition";
import { Image } from "antd";

const Showsv2 = () => {
    const { data: shows, isLoading } = useGetCompetitions();

    return (
        <section className={styles.showsContainer}>
            <h1 className={styles.title}>COMPETITIONS</h1>

            <div className={styles.shows}>
                {shows?.data?.map((show) => (
                    <div key={show?._id} className={styles.show}>
                        <Image
                            preview={false}
                            placeholder="Loading"
                            loading="lazy"
                            className={styles.image}
                            src={show?.imageUrl}
                            alt=""
                        />

                        <div className={styles.content}>
                            <h2 className={styles.showTitle}>{show?.title}</h2>

                            <p className={styles.date}>
                                <RiCalendar2Fill /> <span>{show?.date}</span>
                            </p>

                            <Link href="/registration">
                                <Button content="Register Now" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Showsv2;

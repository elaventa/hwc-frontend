import styles from "./Header.module.scss";
import img from "../../assets/background2.png";
import Image from "next/image";

const Header = ({ title }) => {
    return (
        <div className={styles.headerContainer}>
            <Image
                placeholder="blur"
                loading="lazy"
                className={styles.image}
                src={img}
                alt="header img"
            />
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
};

export default Header;

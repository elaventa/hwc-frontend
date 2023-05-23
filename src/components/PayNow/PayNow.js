import { Divider, Typography } from "antd";
import styles from "./Paynow.module.scss";
import Button from "../Button/Button";
import Link from "next/link";
import img from "../../assets/qr.png";
import { useEffect, useState } from "react";
import Image from "next/image";

const PayNow = ({ data }) => {
    const [paid, setpaid] = useState(false);
    const [amount, setamount] = useState();

    useEffect(() => {
        let total = 0;
        console.log("hi", data);
        console.log(data?.newReg?.categories);
        if (data?.newReg?.categories) {
            Object.values(data?.newReg?.categories).forEach(
                (value) => (total += value?.length)
            );
        }
        setamount(total * 5500);
    }, [data]);

    if (paid) {
        return (
            <Typography.Paragraph
                style={{ margin: "30px 0", textAlign: "center" }}
            >
                Thank you. Your registration is successful !. You can close this
                page.
            </Typography.Paragraph>
        );
    }
    return (
        <div className={styles.payNow}>
            <Typography.Title level={2} style={{ textAlign: "center" }}>
                Payment Page
            </Typography.Title>
            <Divider />
            <div className={styles.paymentDetails}>
                <p>Amount: {amount}</p>
                {/* <p>Please Gpay {amount}Rs to +918197120172</p> */}
                <a href={`upi://pay?pa=8197120172@ybl&am=${amount}`}>
                    <Button content={"Pay Now"} />
                </a>

                <p>OR</p>
                <div className="image">
                    <Image width={200} height={200} src={img} alt="qr code" />
                </div>
                {/* <p>After doing the payment please click the button below</p>

                <Button onClick={() => setpaid(true)} content={"Done"} /> */}

                <p>Go to <Link style={{textDecoration: "underline"}} href={"/"}>Home Page</Link></p>
            </div>
        </div>
    );
};

export default PayNow;

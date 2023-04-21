import { Divider, Typography } from "antd";
import styles from "./Paynow.module.scss";
import Button from "../Button/Button";
import Link from "next/link";
import { useState } from "react";

const PayNow = ({ data, amount }) => {
    const [paid, setpaid] = useState(false);

    if (paid) {
        return (
            <Typography.Paragraph style={{margin: "30px 0", textAlign: "center"}}>
                Thank you. Your registration is successful !. You can close
                this page.
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
                <p>Please Gpay {amount}Rs to +918197120172</p>
                <p>After doing the payment please click the button below</p>

                <Button onClick={() => setpaid(true)} content={"Done"} />
            </div>
        </div>
    );
};

export default PayNow;

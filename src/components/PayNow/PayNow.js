import { Divider, Typography } from "antd"
import styles from "./Paynow.module.scss"
import Button from "../Button/Button"

const PayNow = ({data, amount}) => {
  return (
    <div className={styles.payNow}>
        <Typography.Title level={2} style={{textAlign: "center"}}>Payment Page</Typography.Title>
        <Divider />
        <div className={styles.paymentDetails}>
            <p>Amount: {amount}</p>
            <p>Please Gpay {amount}Rs to +918197120172</p>
            <p>After doing the payment please click the button below</p>
            <Button content={"Done"} />
        </div>
        
    </div>
  )
}

export default PayNow
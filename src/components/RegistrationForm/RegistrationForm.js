import { useEffect, useState } from "react";
import { Button, Checkbox, Divider, Form, Modal, Spin, Typography } from "antd";
import BasicDetails from "./BasicDetails";
import Address from "./Address";
import Identity from "./Identity";
import Category from "./Category";
import FemaleCategory from "./FemaleCategory";
import MensCategory from "./MensCategory";
import { useRegister } from "@/reactQuery/registration";
import Link from "next/link";
import ShowAddressModal from "../Dashboard/ShowAddressModal";
import PayNow from "../PayNow/PayNow";

const RegistrationForm = () => {
    const [form] = Form.useForm();
    const category = Form.useWatch("category", form);
    console.log(category);

    const { mutate: register, isLoading, data } = useRegister();

    const onFinish = (values) => {
        console.log(values);
        const payload = JSON.parse(JSON.stringify(values));
        payload.proof.govtID = values.proof.govtID.file.response;
        payload.proof.photo = values.proof.photo.file.response;
        register({ payload });
        form.resetFields();
    };

    const selectedCategories = Form.useWatch("categories", form);
    console.log(selectedCategories);

    const [amount, setamount] = useState(0);

    useEffect(() => {
        let total = 0;
        if (selectedCategories) {
            Object.values(selectedCategories).forEach(
                (value) => (total += value?.length)
            );
        }
        setamount(total * 5500);
    }, [selectedCategories]);


    if(true || data?.status === "ok"){
        return <PayNow data={data} amount={amount} />
    }
    

    if (isLoading) {
        return (
            <div
                style={{
                    height: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Spin tip="Registering..."></Spin>
            </div>
        );
    }

    return (
        <section className="registrationFormSection">
            <Form
                onFinish={onFinish}
                form={form}
                layout="vertical"
                className="form"
                size="large"
            >
                <h3 className="formSectionTitle">Personal Details</h3>
                <BasicDetails />
                <Divider />
                <h3 className="formSectionTitle">Address Details</h3>
                <Address />
                <Divider />

                <h3 className="formSectionTitle">Proof of Identity</h3>
                <Identity />
                <Divider />

                <h3 className="formSectionTitle">Category</h3>
                <Category />

                {category === "women" ? <FemaleCategory /> : <MensCategory />}

                <Divider />
                <Typography.Text>
                    *Participants must pay ₹5500/- for each show. This amount is
                    non refundable
                </Typography.Text>
                <Divider />

                <div className="totalAmount">
                    <Typography.Title level={4}>
                        Total Amount : {isNaN(amount) ? 0 : amount} Rs
                    </Typography.Title>
                </div>

                <Form.Item
                    valuePropName="checked"
                    name="agree"
                    rules={[
                        {
                            required: true,
                            message:
                                "You should agree the Terms & Conditions to register",
                        },
                    ]}
                >
                    <Checkbox>
                        By clicking register you agree to our Terms &
                        Conditions.{" "}
                        <Link href="/rules-and-regulations" target="_blank">
                            (Read Rules and Regulations)
                        </Link>
                    </Checkbox>
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Pay Now
                </Button>
            </Form>
        </section>
    );
};

export default RegistrationForm;

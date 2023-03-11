import { useEffect, useState } from "react";
import { Button, Checkbox, Divider, Form, Typography } from "antd";
import BasicDetails from "./BasicDetails";
import Address from "./Address";
import Identity from "./Identity";
import Category from "./Category";
import FemaleCategory from "./FemaleCategory";
import MensCategory from "./MensCategory";


const RegistrationForm = () => {
    const [form] = Form.useForm();
    const category = Form.useWatch("category", form);
    console.log(category);
    const onFinish = (values) => {
        console.log(values);
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

        setamount(total * 2000);
    }, [selectedCategories]);

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
                    *Participants must pay ₹2000/- for each show.{" "}
                </Typography.Text>
                <Divider />

                <div className="totalAmount">
                    <Typography.Title level={4}>
                        Total Amount : {amount} Rs
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
                        Conditions.
                    </Checkbox>
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form>
        </section>
    );
};

export default RegistrationForm;

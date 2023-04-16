import { Col, Form, Input, Row } from "antd";

const Address = () => {
    return (
        <Row gutter={10}>
            <Col xs={24} lg={12}>
                <Form.Item
                    label="Street Address"
                    name={["addressDetails","streetAddress"]}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter your Address",
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>
            </Col>
            <Col xs={12} lg={6}>
                <Form.Item
                    label="City"
                    name={["addressDetails","city"]}
                    rules={[
                        {
                            required: true,
                            message: "Please enter your city",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col xs={12} lg={6}>
                <Form.Item
                    label="State"
                    name={["addressDetails","state"]}
                    rules={[
                        {
                            required: true,
                            message: "Please enter your state",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col xs={12} lg={6}>
                <Form.Item
                    label="Country"
                    name={["addressDetails","country"]}
                    rules={[
                        {
                            required: true,
                            message: "Please Enter the Country",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col xs={12} lg={6}>
                <Form.Item
                    label="Pin code"
                    name={["addressDetails","pincode"]}
                    rules={[
                        {
                            required: true,
                            message: "Please enter your pincode",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Address;

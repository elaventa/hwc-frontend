import { Col, Form, Input, InputNumber, Row, Select } from "antd";
import React from "react";

const BasicDetails = () => {
    return (
        <Row gutter={10}>
            <Col xs={6} lg={4}>
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Please select a title",
                        },
                    ]}
                >
                    <Select>
                        <Select.Option value="mr">Mr.</Select.Option>
                        <Select.Option value="ms">Ms.</Select.Option>
                        <Select.Option value="mrs">Mrs.</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col xs={9} lg={6}>
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your first name",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>

            <Col xs={9} lg={6}>
                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your last name",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col xs={12} sm={6} lg={4}>
                <Form.Item
                    label="Gender"
                    name="gender"
                    rules={[
                        {
                            required: true,
                            message: "Please select a gender",
                        },
                    ]}
                >
                    <Select>
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col xs={12} lg={4}>
                <Form.Item
                    label="Age"
                    name="age"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your age",
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
            </Col>

            <Col xs={24} sm={12} lg={6}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            type: "email",
                            required: true,
                            message: "Please enter your email",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col xs={24} sm={12} lg={6}>
                <Form.Item
                    label="Mobile Number"
                    name="mobileNo"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your Mobile Number",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default BasicDetails;

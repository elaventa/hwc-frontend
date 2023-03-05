"use client";
import {
    Button,
    Divider,
    Form,
    Input,
    Radio,
    Select,
    Typography,
    Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import "./RegistrationForm.scss";
const RegistrationForm = () => {
    return (
        <section>
            <Form
                // labelCol={{
                //     span: 18,
                // }}
                // wrapperCol={{
                //     span: 18,
                // }}
                layout="vertical"
                className="form"
                size="large"
            >
                <div className="row3">
                    <h3 className="formSectionTitle">Personal Details</h3>
                </div>
                <div className="row3">
                    <Form.Item
                        label="Title"
                        name="title"
                        wrapperCol={{
                            span: 8,
                        }}
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
                </div>

                <div className="row4">
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
                            <Select.Option value="other">Other</Select.Option>
                        </Select>
                    </Form.Item>
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
                        <Input />
                    </Form.Item>
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
                </div>
                <Divider />
                <div className="row3">
                    <h3 className="formSectionTitle">Address Details</h3>
                </div>
                <div className="row3">
                    <Form.Item
                        label="Street Address"
                        name="streetAddress"
                        rules={[
                            {
                                required: true,
                                message: "Please Enter your Address",
                            },
                        ]}
                    >
                        <TextArea />
                    </Form.Item>
                    <Form.Item
                        label="City"
                        name="city"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your city",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="State"
                        name="state"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your state",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div className="row3">
                    <Form.Item
                        label="Country"
                        name="country"
                        rules={[
                            {
                                required: true,
                                message: "Please Enter the Country",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Pin code"
                        name="pincode"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your pincode",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </div>

                <Divider />

                <div className="row3">
                    <h3 className="formSectionTitle">Proof of Identity</h3>
                </div>
                <div className="row3">
                    <Form.Item
                        label="Govt. ID Type"
                        name="idType"
                        rules={[
                            {
                                required: true,
                                message: "Please Select the Govt. ID Type",
                            },
                        ]}
                    >
                        <Select>
                            <Select.Option value="aadhar">
                                Aadhar Card
                            </Select.Option>
                            <Select.Option value="driving">
                                Driving License
                            </Select.Option>
                            <Select.Option value="pancard">
                                Pan Card
                            </Select.Option>
                            <Select.Option value="passport">
                                Passport
                            </Select.Option>
                            <Select.Option value="rationcard">
                                Ration Card
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Govt. ID"
                        name="govtID"
                        rules={[
                            {
                                required: true,
                                message: "Please Upload govt. Id",
                            },
                        ]}
                    >
                        <Upload>
                            <Button icon={<UploadOutlined />}>
                                Click to Upload Govt. Id
                            </Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        label="Your Photo"
                        name="photo"
                        rules={[
                            {
                                required: true,
                                message: "Please Upload your Photo",
                            },
                        ]}
                    >
                        <Upload>
                            <Button icon={<UploadOutlined />}>
                                Click to Upload your photo
                            </Button>
                        </Upload>
                    </Form.Item>
                </div>

                <Divider />

                <div className="row3">
                    <h3 className="formSectionTitle">Category</h3>
                </div>

                <Form.Item
                    label="Choose category"
                    name="category"
                    rules={[
                        {
                            required: true,
                            message: "Please choose a category",
                        },
                    ]}
                >
                    <Radio.Group defaultValue="men" buttonStyle="solid">
                        <Radio.Button value="men">Men</Radio.Button>
                        <Radio.Button value="women">Women</Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </section>
    );
};

export default RegistrationForm;

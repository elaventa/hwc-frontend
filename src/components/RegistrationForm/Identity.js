import { Button, Col, Form, Row, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Identity = () => {
    return (
        <Row gutter={20}>
            <Col xs={24} lg={6}>
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
                        <Select.Option value="pancard">Pan Card</Select.Option>
                        <Select.Option value="passport">Passport</Select.Option>
                        <Select.Option value="rationcard">
                            Ration Card
                        </Select.Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col xs={24} md={12} lg={6}>
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
            </Col>
            <Col xs={24} md={12} lg={6}>
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
            </Col>
        </Row>
    );
};

export default Identity;

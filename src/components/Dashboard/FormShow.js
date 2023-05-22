import { Button, Form, Input, Upload } from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { config } from "@/config";
import { useCompetition } from "@/reactQuery/competition";

const FormShow = () => {

    const { mutate: createCompetition, isLoading} = useCompetition()


    const onFinish = (values) => {
        console.log(values);
        values.imageUrl = values?.imageUrl?.file?.response
        createCompetition({payload: values})
    };

    return (
        <Form
            onFinish={onFinish}
            layout="vertical"
            size="large"
        >
            <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required: true,
                        message: "Please enter the title of competition",
                    },
                ]}
            >
                <Input placeholder="eg: Mr. Bangalore" />
            </Form.Item>

            <Form.Item
                label="Date"
                name="date"
                rules={[
                    {
                        required: true,
                        message: "Please enter the dates of competition",
                    },
                ]}
            >
                <Input placeholder="eg: 28,29,30 June 2023" />
            </Form.Item>

            <Form.Item
                label="Image"
                name="imageUrl"
                rules={[
                    {
                        required: true,
                        message: "Please Upload an image for competition",
                    },
                ]}
            >
                <Upload action={`${config.SERVER_URL}/upload`}>
                    <Button icon={<UploadOutlined />}>
                        Click to Upload Image
                    </Button>
                </Upload>
            </Form.Item>

            <Button type="primary" htmlType="submit">
                Save Competition
            </Button>
        </Form>
    );
};

export default FormShow;

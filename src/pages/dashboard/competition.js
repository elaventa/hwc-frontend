import Showsv2 from "@/components/Showv2/Showsv2";
import { Button, Form, Input, Modal, Upload } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { config } from "@/config";
import { useCompetition } from "@/reactQuery/competition";


const CompetitionPage = () => {

    const [isModalOpen, setisModalOpen] = useState(false)
    const handleOk = () => {
        setisModalOpen(false);
    };
    const handleCancel = () => {
        setisModalOpen(false);
    };

    const { mutate: createCompetition, isLoading} = useCompetition()


    const onFinish = (values) => {
        console.log(values);
        values.imageUrl = values?.imageUrl?.file?.response
        createCompetition({payload: values})
        setisModalOpen(false)
    };

    return (
        <div>
            <Modal
                title="Address Details"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
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
            </Modal>
            <div
                style={{
                    margin: "50px 0 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <Button onClick={() => setisModalOpen(true)} type="primary">Add New Competition</Button>
            </div>

            <Showsv2 />
        </div>
    );
};

export default CompetitionPage;

CompetitionPage.getLayout = function getLayout(page) {
    return page;
};

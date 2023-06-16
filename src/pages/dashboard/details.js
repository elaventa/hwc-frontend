import {
    Button,
    Form,
    Image,
    Input,
    Skeleton,
    Space,
    Spin,
    Typography,
    Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { config } from "@/config";
import { useState } from "react";
import { useGetDetails, useUpdateDetails } from "@/reactQuery/details";

const DataPage = () => {
    const { data: details, isLoading: isDetailsLoading } = useGetDetails();
    const { mutate: updateDetails, isLoading: isUpdating } = useUpdateDetails();
    const [changed, setchanged] = useState(false);
    const [qrCode, setqrCode] = useState();

    const onUpload = (value) => {
        console.log(value);
        if (value?.file?.status === "done") {
            setchanged(true);
            setqrCode(value?.file?.response);
        }
    };

    const onChange = () => {
        setchanged(true);
    };

    const onFinish = (values) => {
        console.log(values);
        values.qrCode = qrCode ? qrCode : details?.data?.qrCode;
        updateDetails({ payload: values });
        setchanged(false);
    };

    if (isDetailsLoading || !details) {
        return <Spin />;
    }

    return (
        <section>
            <Form initialValues={details?.data} onFinish={onFinish}>
                {changed && (
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                )}
                {isUpdating ? (
                    <Skeleton />
                ) : (
                    <div className="boxContainer">
                        <div className="box">
                            <Typography.Title level={5}>
                                Youtube Link
                            </Typography.Title>
                            <Space direction="vertical">
                                <iframe
                                    src={details?.data?.youtubeLink}
                                    title="YouTube video player"
                                ></iframe>
                                <Form.Item name="youtubeLink">
                                    <Input onChange={onChange} />
                                </Form.Item>
                            </Space>
                        </div>

                        <div className="box">
                            <Typography.Title level={5}>
                                Gpay Number
                            </Typography.Title>
                            <Form.Item label="Gpay Number" name="gpayNo">
                                <Input onChange={onChange} />
                            </Form.Item>

                            <Form.Item label="UPI ID" name="upiId">
                                <Input onChange={onChange} />
                            </Form.Item>
                        </div>

                        <div className="box">
                            <Typography.Title level={5}>
                                Qr Code
                            </Typography.Title>
                            <Form.Item name="qrCode">
                                <Space direction="vertical" align="center">
                                    <Image
                                        preview={false}
                                        placeholder="loading"
                                        loading="lazy"
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                        }}
                                        src={details?.data?.qrCode}
                                        alt=""
                                    />
                                    <Upload
                                        onChange={onUpload}
                                        action={`${config.SERVER_URL}/upload`}
                                    >
                                        <Button icon={<UploadOutlined />}>
                                            Click here to update Qr Code
                                        </Button>
                                    </Upload>
                                </Space>
                            </Form.Item>
                        </div>
                    </div>
                )}
            </Form>
        </section>
    );
};

export default DataPage;

DataPage.getLayout = function getLayout(page) {
    return page;
};

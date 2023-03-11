import { Form, Radio } from "antd";
import React from "react";

const Category = () => {
    return (
        <Form.Item
            shouldUpdate
            label="Choose category"
            name="category"
            rules={[
                {
                    required: true,
                    message: "Please choose a category",
                },
            ]}
            initialValue="men"
        >
            <Radio.Group defaultValue={"men"} buttonStyle="solid">
                <Radio.Button value="men">Men</Radio.Button>
                <Radio.Button value="women">Women</Radio.Button>
            </Radio.Group>
        </Form.Item>
    );
};

export default Category;

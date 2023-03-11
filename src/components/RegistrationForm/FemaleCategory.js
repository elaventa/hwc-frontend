import { Checkbox, Col, Form, Row, Space } from "antd";

const FemaleCategory = () => {
    const categories = [
        {
            value: "bodyBuilding",
            label: "Women's Body Building Open Category",
        },
        {
            value: "bikini",
            label: "Women's Bikini Open Category",
        },
        {
            value: "classic",
            label: "Women's Classic Physique Category",
        },
    ];
    return (
        <Form.Item name={["categories", "women"]}>
            <Checkbox.Group>
                <Space direction="vertical">
                    {categories.map((category) => (
                        <Checkbox style={{padding: "10px 0"}} key={category.value} value={category.value}>
                            {category.label}
                        </Checkbox>
                    ))}
                </Space>
            </Checkbox.Group>
        </Form.Item>
    );
};

export default FemaleCategory;

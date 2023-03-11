import { Checkbox, Form } from "antd";

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
            <Checkbox.Group options={categories} />
        </Form.Item>
    );
};

export default FemaleCategory;

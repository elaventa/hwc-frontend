import { Checkbox, Col, Form, Radio, Row, Typography } from "antd";

const MensCategory = () => {
    const bodyBuildingCategories = [
        {
            value: "1",
            label: "Category 1",
        },
        {
            value: "2",
            label: "Category 2",
        },
        {
            value: "3",
            label: "Category 3",
        },
        {
            value: "4",
            label: "Category 4",
        },
        {
            value: "5",
            label: "Category 5",
        },
        {
            value: "6",
            label: "Category 6",
        },
        {
            value: "7",
            label: "Category 7",
        },
        {
            value: "8",
            label: "Category 8",
        },
    ];

    const classicPhysiqueCategories = [
        {
            value: "1",
            label: "Category A",
        },
        {
            value: "2",
            label: "Category B",
        },
        {
            value: "3",
            label: "Category C",
        },
        {
            value: "4",
            label: "Category D",
        },
    ];
    return (
        <>
            <Row gutter={70}>
                <Col xs={24} lg={12}>
                    <Row>
                        <Typography.Title level={5}>
                            Body Building Under 23 Category (open)
                        </Typography.Title>
                    </Row>
                    <Form.Item
                        initialValue={[]}
                        name={["categories", "bodyBuilding"]}
                    >
                        <Checkbox.Group>
                            <Row gutter={20}>
                                {bodyBuildingCategories.map((category) => (
                                    <Col key={category.value} lg={8}>
                                        <Checkbox value={category.value}>
                                            {category.label}
                                        </Checkbox>
                                    </Col>
                                ))}
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                </Col>
                <Col>
                    <Row>
                        <Form.Item
                            initialValue={[]}
                            name={["categories", "master"]}
                        >
                            <Checkbox.Group>
                                <Checkbox value={"1"}>
                                    <Typography.Title level={5}>
                                        Body Building Master Category (above 40)
                                    </Typography.Title>
                                </Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                    </Row>
                </Col>
            </Row>

            <Row gutter={70}>
                <Col xs={24} lg={12}>
                    <Row>
                        <Typography.Title level={5}>
                            Classic Physique Under 23 Category (open)
                        </Typography.Title>
                    </Row>
                    <Form.Item
                        initialValue={[]}
                        name={["categories", "classicPhysique"]}
                    >
                        <Checkbox.Group>
                            <Row gutter={20}>
                                {classicPhysiqueCategories.map((category) => (
                                    <Col key={category.value} lg={12}>
                                        <Checkbox value={category.value}>
                                            {category.label}
                                        </Checkbox>
                                    </Col>
                                ))}
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                </Col>
                <Col xs={24} lg={8}>
                    <Row>
                        <Typography.Title level={5}>
                            Mens Physique Under 23 Category (open)
                        </Typography.Title>
                    </Row>
                    <Form.Item
                        initialValue={[]}
                        name={["categories", "mensPhysique"]}
                    >
                        <Checkbox.Group>
                            <Row gutter={20}>
                                {classicPhysiqueCategories.map((category) => (
                                    <Col key={category.value} lg={12}>
                                        <Checkbox value={category.value}>
                                            {category.label}
                                        </Checkbox>
                                    </Col>
                                ))}
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
};

export default MensCategory;

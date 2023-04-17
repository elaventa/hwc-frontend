import { Checkbox, Col, Form, Row, Typography } from "antd";

const MensCategory = () => {
    const bodyBuildingCategories = [
        {
            value: "1",
            label: "Category 1 (55Kg)",
        },
        {
            value: "2",
            label: "Category 2 (60Kg)",
        },
        {
            value: "3",
            label: "Category 3 (65Kg)",
        },
        {
            value: "4",
            label: "Category 4 (70Kg)",
        },
        {
            value: "5",
            label: "Category 5 (75Kg)",
        },
        {
            value: "6",
            label: "Category 6 (80Kg)",
        },
        {
            value: "7",
            label: "Category 7 (85Kg)",
        },
        {
            value: "8",
            label: "Category 8 (90Kg)",
        },
        {
            value: "9",
            label: "Category 9 (Above 90Kg)",
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
            <Row gutter={30} >
                <Col style={{padding: "10px 0"}} xs={24} lg={12}>
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
                            <Row>
                                {bodyBuildingCategories.map((category) => (
                                    <Col style={{padding: "10px 0"}} key={category.value} xs={12} lg={6}>
                                        <Checkbox value={category.value}>
                                            {category.label}
                                        </Checkbox>
                                    </Col>
                                ))}
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                </Col>
                <Col style={{padding: "10px 0"}}>
                    
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
                    
                </Col>
            </Row>

            <Row gutter={30} >
                <Col style={{padding: "10px 0"}} xs={24} lg={12}>
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
                            <Row>
                                {classicPhysiqueCategories.map((category) => (
                                    <Col style={{padding: "10px 0"}} key={category.value} xs={12} lg={12}>
                                        <Checkbox value={category.value}>
                                            {category.label}
                                        </Checkbox>
                                    </Col>
                                ))}
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                </Col>
                <Col style={{padding: "10px 0"}}>
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
                            <Row>
                                {classicPhysiqueCategories.map((category) => (
                                    <Col style={{padding: "10px 0"}} key={category.value} xs={12} lg={12}>
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

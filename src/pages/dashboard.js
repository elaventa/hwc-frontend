import { useGetRegistrations } from "@/reactQuery/registration";
import { Button, Table, Tag } from "antd";

const DashboardPage = () => {
    const { data: registrations, isLoading: isRegistrationsLoading } =
        useGetRegistrations();
    console.log(registrations?.data);
    const columns = [
        {
            title: "Name",
            key: "name",
            render: (_, record) => (
                <p>
                    {record?.personalDetails?.title?.toUpperCase() + ". "}
                    {record?.personalDetails?.firstName}{" "}
                    {record?.personalDetails?.lastName}
                </p>
            ),
        },
        {
            title: "Email",
            key: "email",
            dataIndex: ["personalDetails", "email"],
        },
        {
            title: "Mobile Number",
            key: "mobileNo",
            dataIndex: ["personalDetails", "mobileNo"],
        },
        {
            title: "Gender",
            key: "gender",
            dataIndex: ["personalDetails", "gender"],
        },
        {
            title: "Age",
            key: "age",
            dataIndex: ["personalDetails", "age"],
        },
        {
            title: "Category",
            key: "category",
            dataIndex: "category",
        },
        {
            title: "Categories",
            key: "categories",
            dataIndex: "categories",
            render: (categories) =>
                Object.keys(categories)?.map((category) =>
                    categories[category].map((subCategory) => (
                        <Tag color="green" key={`${category}-${subCategory}`}>
                            {category}-{subCategory}
                        </Tag>
                    ))
                ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => <Button>View</Button>,
        },
    ];
    return (
        <>
            <Table
                loading={isRegistrationsLoading}
                columns={columns}
                dataSource={registrations?.data}
                sticky
                scroll={{
                    x: 1500,
                }}
            />
            ;
        </>
    );
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page) {
    return  page ;
};

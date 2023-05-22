import ShowAddressModal from "@/components/Dashboard/ShowAddressModal";
import {
    useApprovePayment,
    useGetRegistrations,
} from "@/reactQuery/registration";
import { Button, Menu, Table, Tag } from "antd";
import { useState } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import Link from "next/link";

const DashboardPage = () => {
    const { data: registrations, isFetching, isLoading: isRegistrationsLoading } =
        useGetRegistrations();
    const {
        mutate: approve,
        isLoading: isApproving,
    } = useApprovePayment();
    const [showAddressModal, setshowAddressModal] = useState(false);
    const [address, setaddress] = useState();

    const showAddress = (addr) => {
        setshowAddressModal(true);
        setaddress(addr);
    };

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
            title: "Address",
            key: "address",
            dataIndex: "addressDetails",
            render: (address) => (
                <Button onClick={() => showAddress(address)}>
                    View Address
                </Button>
            ),
        },

        {
            title: "Payment",
            key: "isPaymentDone",
            dataIndex: "isPaymentDone",
            render: (isPaymentDone, record) =>
                isPaymentDone ? (
                    <CheckCircleOutlined
                        style={{ color: "green", fontSize: "30px" }}
                    />
                ) : (
                    <Button onClick={() => approve(record._id)}>Approve</Button>
                ),
        },
    ];

    return (
        <>
            {showAddressModal ? (
                <ShowAddressModal
                    isModalOpen={showAddressModal}
                    setisModalOpen={setshowAddressModal}
                    address={address}
                />
            ) : null}
            
            <Table
                loading={isRegistrationsLoading || isFetching || isApproving}
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
    return page;
};

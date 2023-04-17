import { Modal } from "antd";


const ShowAddressModal = ({ isModalOpen, setisModalOpen, address }) => {
    const handleOk = () => {
        setisModalOpen(false);
    };
    const handleCancel = () => {
        setisModalOpen(false);
    };

    const spanStyle = {
        fontWeight: "bold"
    }
    return (
        <Modal
            title="Address Details"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <p>Street Address : <span style={spanStyle}>{address?.streetAddress}</span></p>
            <p>City : <span style={spanStyle}>{address?.city}</span></p>
            <p>State : <span style={spanStyle}>{address?.state}</span></p>
            <p>Country : <span style={spanStyle}>{address?.country}</span></p>
            <p>Pincode : <span style={spanStyle}>{address?.pincode}</span></p>
        </Modal>
    );
};

export default ShowAddressModal;

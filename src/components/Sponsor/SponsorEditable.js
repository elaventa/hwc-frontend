import { Button, Image, Skeleton, Upload } from "antd";
import styles from "./Sponsor.module.scss";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { config } from "@/config";
import { useGetSponsors, useUpdateSponsor } from "@/reactQuery/sponsor";
import { Spinner } from "@nextui-org/react";

const SponsorEditable = () => {
    const { data: sponsors, isLoading } = useGetSponsors();
    const { mutate: updateSponsor, isLoading: isUpdating } = useUpdateSponsor()
    const [id, setId] = useState(null)
    const onUpload = (value) => {
        console.log(id)
        console.log(value)
        if(value?.file?.status === "done"){
            updateSponsor({payload: { id, imageUrl: value?.file?.response}})
        }
    }

    return (
        <section className={styles.sponsorContainer}>
            <h1 className={styles.title}>OUR SPONSORS </h1>


            <div className={styles.sponsors}>

                {sponsors?.data?.map((sponsor) => (
                    isUpdating ? <div key={sponsor.title} className={styles.sponsor}> 
                        <Skeleton />
                    </div>:

                    <div key={sponsor.title} className={styles.sponsor}>
                        <Image
                            preview={false}
                            placeholder="loading"
                            loading="lazy"
                            className={styles.image}
                            src={sponsor.imageUrl}
                            alt=""
                        />
                        <Upload onChange={onUpload} action={`${config.SERVER_URL}/upload`}>
                            <Button onClick={() => setId(sponsor._id)} icon={<UploadOutlined />}>
                                Click here to update image
                            </Button>
                        </Upload>

                        <p className={styles.sponsorName}>
                            {sponsor.title} 
                        </p>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default SponsorEditable;

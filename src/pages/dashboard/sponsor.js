import React from "react";
import SponsorEditable from "@/components/Sponsor/SponsorEditable";

const SponsorPage = () => {
    return <SponsorEditable />;
};

export default SponsorPage;

SponsorPage.getLayout = function getLayout(page) {
    return page;
};

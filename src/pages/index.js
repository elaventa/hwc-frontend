import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Hero from "@/components/Hero/Hero";
import JoinUs from "@/components/JoinUs/JoinUs";
import Shows from "@/components/Shows/Shows";
import Sponsor from "@/components/Sponsor/Sponsor";
import Team from "@/components/Team/Team";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Shows />
            <Sponsor />
            <JoinUs />
            {/* <Team /> */}
            <GetInTouch />
        </>
    );
};

export default HomePage;

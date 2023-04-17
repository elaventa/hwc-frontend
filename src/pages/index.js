import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Hero from "@/components/Hero/Hero";
import JoinUs from "@/components/JoinUs/JoinUs";
import Shows from "@/components/Shows/Shows";
import Showsv2 from "@/components/Showv2/Showsv2";
import Sponsor from "@/components/Sponsor/Sponsor";
import Team from "@/components/Team/Team";

const HomePage = () => {
    return (
        <>
            <Hero />
            {/* <Shows /> */}
            <Showsv2 />
            <Sponsor />
            <JoinUs />
            {/* <Team /> */}
            <GetInTouch />
        </>
    );
};

export default HomePage;

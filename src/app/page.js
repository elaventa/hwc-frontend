import { Inter } from "@next/font/google";
import Shows from "@/components/Shows/Shows";
import Hero from "@/components/Hero/Hero";
import Sponsor from "@/components/Sponsor/Sponsor";
import JoinUs from "@/components/JoinUs/JoinUs";
import Team from "@/components/Team/Team";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Hero />
            <Shows />
            <Sponsor />
            <JoinUs />
            <Team /> 
            <GetInTouch />
        </>
    );
}

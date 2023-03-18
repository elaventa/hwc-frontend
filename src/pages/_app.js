import Layout from "@/components/Layout";
import "./global.scss";
import "@/components/RegistrationForm/RegistrationForm.scss";
import NextNProgress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import logo from "../assets/logo.png";
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <DefaultSeo
                title="Hardwork Classic"
                description="Hard work classic"
                openGraph={{
                    type: "website",
                    locale: "en_IE",
                    url: "https://hardworkclassic.com/",
                    siteName: "HardWork Classic",
                    images: [{ url: logo }],
                }}
            />
            <NextNProgress />
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;

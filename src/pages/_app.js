import Layout from "@/components/Layout";
import "./global.scss"
import "@/components/RegistrationForm/RegistrationForm.scss"
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <NextNProgress />
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;

import Layout from "@/components/Layout";
import "./global.scss";
import "@/components/RegistrationForm/RegistrationForm.scss";
import NextNProgress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import DashboardLayout from "@/components/DashboardLayout";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout;

    if (getLayout) {
        return getLayout(
            <QueryClientProvider client={queryClient}>
                <DashboardLayout>
                    <Component {...pageProps} />
                </DashboardLayout>
            </QueryClientProvider>
        );
    }
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <DefaultSeo
                    title="Hardwork Classic"
                    description="Hard work classic"
                    openGraph={{
                        type: "website",
                        locale: "en_IE",
                        url: "https://hardworkclassic.com/",
                        siteName: "HardWork Classic",
                        images: [
                            {
                                url: "https://github.com/elaventa/hwc-frontend/blob/master/src/assets/logo.png?raw=true",
                            },
                        ],
                    }}
                />
                <NextNProgress />
                <Component {...pageProps} />
            </Layout>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </QueryClientProvider>
    );
}

export default MyApp;

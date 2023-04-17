import Navbar from "@/components/navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";

export default function Layout({ children }) {
    return (
        <>
            {/* <Topbar /> */}
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

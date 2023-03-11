import Navbar from "@/components/navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";

export default function Layout({ children }) {
    return (
        <>
            <Topbar />
            <Navbar />
            {children}
        </>
    );
}

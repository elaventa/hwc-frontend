import Navbar from "@/components/navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import "./globals.scss";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                <Topbar />
                <Navbar />
                {children}
            </body>
        </html>
    );
}

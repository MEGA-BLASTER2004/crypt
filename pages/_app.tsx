import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <Header />
            <div className="h-full flex">
                <Sidebar />
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;

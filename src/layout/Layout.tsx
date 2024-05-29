import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({children} : LayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;
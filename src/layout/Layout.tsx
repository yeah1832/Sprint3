import styled from "styled-components";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({children} : LayoutProps) {
    return (
        <>
            <Header />
            <LayoutStyle>{children}</LayoutStyle>
            <Footer />
        </>
    )
}

const LayoutStyle = styled.header`
    width: 100%;
    margin: 0 auto;
    max-width: ${({theme}) => theme.layout.width.large};
    padding: 20px 0;
`;

export default Layout;
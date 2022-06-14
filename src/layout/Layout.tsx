import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import usePageTitle from '../hooks/usePageTitle';

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="h-screen flex-1 overflow-scroll bg-main-content">
            <Header />
            {children}
        </main>
    );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    const f = usePageTitle();
    return (
        <div className="flex">
            <Sidebar />
            <ContentWrapper>{children}</ContentWrapper>
        </div>
    );
};

export default Layout;

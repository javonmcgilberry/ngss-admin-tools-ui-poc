import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import usePageTitle from '../hooks/usePageTitle';

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="h-screen w-full max-w-[70vw] overflow-scroll bg-main-content px-6 py-10">
            <Header />
            {children}
        </main>
    );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    const f = usePageTitle();
    return (
        <div className="flex bg-main-content">
            <Sidebar />
            <ContentWrapper>{children}</ContentWrapper>
        </div>
    );
};

export default Layout;

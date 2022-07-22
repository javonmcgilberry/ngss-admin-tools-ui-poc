import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import usePageTitle from '../hooks/usePageTitle';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex bg-main-content">
            <Sidebar />
            {children}
        </div>
    );
};

export default Layout;

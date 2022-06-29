import styles from './layout.module.scss';
import Sidebar from '../sidebar/Sidebar';
import Main from '../main/Main';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.app_container}>
            <Sidebar />
            <Main>{children}</Main>
        </div>
    );
};

export default Layout;

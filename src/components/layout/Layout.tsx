import styles from './layout.module.scss';
import Sidebar from '../sidebar/Sidebar';
import Main from '../main/Main';
import { PageWrapper } from '../common/Common';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.app_container}>
            <Sidebar />
            <Main>
                <PageWrapper>{children}</PageWrapper>
            </Main>
        </div>
    );
};

export default Layout;

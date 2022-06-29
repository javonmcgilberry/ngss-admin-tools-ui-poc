import styles from './main.module.scss';

const Main = ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.main_container}>{children}</div>;
};

export default Main;

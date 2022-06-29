import styles from './sidebar.module.scss';

export type MarketOption = {
    value: string;
    label: string;
};

const Sidebar = () => {
    return <div className={styles.sidebar_container}>Hello!</div>;
};

export default Sidebar;

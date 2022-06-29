import './index.module.css';

interface IWrapperComponent {
    children: React.ReactNode | React.ReactNode[];
}
export const Row = ({ children }: IWrapperComponent) => {
    return <div className="flex">{children}</div>;
};

import 'twin.macro';
import usePageTitle from '../../hooks/usePageTitle';

const Header = () => {
    const currentPage = usePageTitle();
    return <div tw="border hover:border-black text-blue-400">{currentPage}</div>;
};

export default Header;

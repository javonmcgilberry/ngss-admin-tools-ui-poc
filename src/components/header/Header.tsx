/** @jsxImportSource @emotion/react */
import { Typography } from '@material-tailwind/react';
import 'twin.macro';
import usePageTitle from '../../hooks/usePageTitle';

const Header = () => {
    const currentPage = usePageTitle();
    return (
        <Typography variant="h4" tw="border hover:border-black text-blue-400">
            {currentPage}
        </Typography>
    );
};

export default Header;

import { Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { RoutePathDefinition } from '../../routes/routes';

interface INavigation {
    routes: RoutePathDefinition[];
}

const Navigation = ({ routes }: INavigation) => {
    return (
        <div className="flex flex-col py-2">
            {routes.map((route) => (
                <NavLink key={route.path} style={{ textDecoration: 'none' }} to={route.path}>
                    <div
                        className=" hover:bg-blue-secondary px-4 py-2 font-black transition-all"
                        key={route.title}
                    >
                        <div>
                            <div>
                                <Typography color="white" variant="h6" className="font-bold">
                                    {route.title.toUpperCase()}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

const NavItem = ({}) => {
    return <div></div>;
};

export default Navigation;

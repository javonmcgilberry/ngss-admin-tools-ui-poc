import { Typography } from '@material-tailwind/react';

const User = () => {
    return (
        <div className="flex items-end justify-between">
            <Typography variant="h4" color="white">
                J. Johnson
            </Typography>
            <Typography variant="paragraph" color="white" className="font-bold">
                SIGN OUT
            </Typography>
        </div>
    );
};

export default User;
